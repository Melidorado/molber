import { useState, useEffect } from 'react';
import styled from 'styled-components';

import{ init, sendForm } from 'emailjs-com';
init("user_1dlORuW3dyDHG1NnI1cjI");

const FormContainer = styled.form`
    width: 205px;
    height: ${props => !props.formOpen ?`120px` :`305px`};
    background-color: ${props => props.theme.colors.background};
    border: 1px solid black;
    border-radius: 140px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.formSent ?`center` :`flex-end`};
    justify-content: ${props => props.formSent && `center` };
    position: fixed;
    bottom: 80px;
    right: 50px;
    padding: 50px 20px 20px;
    justify-content:${props => !props.formOpen ?`flex-end` :`center`};
    transition: all 0.3s ease-out;
    overflow: hidden;
    @media (min-width: 1200px) {
        width: 230px;
        height: ${props => !props.formOpen ?`135px` :`345px`};;
    }
    @media (max-width: 575.98px){
        width: 145px;
        height: ${props => !props.formOpen ?`90px` :`245px`};
        border-radius: 100px 0px 0px 0px;
        padding: 20px 10px 10px;
        right: 20px;
        justify-content: flex-end;
    }
`

const Title = styled.p `
    font-size: 20px;
    font-weight: lighter;
    font-style: italic;
    text-align: right;
    margin-bottom: 15px;
    transition: 1.2s ease;
    @media (min-width: 1200px) {
        font-size: 25px;
    }
    @media (max-width: 575.98px){
        font-size: 14px;
    }
`
const Description = styled.p`
    font-size: 11px;
    text-align: right;
    margin-bottom: 15px;
    font-weight: 100;
    transition: 1.2s ease;
    @media (min-width: 1200px) {
        font-size: 15px;
    }
    @media (max-width: 575.98px){
        font-size: 8px;
    }
`
const EmailInput = styled.input`
    padding: 7px 0;
    border: 0;
    border-bottom: 1px solid;
    margin-bottom: 15px;
    transition: 1.2s ease;
    @media (min-width: 1200px) {
        width: 95%;
    }
    @media (max-width: 575.98px){
        width: 100%;
        font-size: 10px;
    }
`
const Message = styled.textarea`
    padding: 10px;
    border-radius: 50px 50px 0px 50px;
    border: 1px solid black;
    margin-bottom: 12px;
    transition: 1.2s ease;
    @media (min-width: 1200px) {
        width: 95%;
    }
    @media (max-width: 575.98px){
        width: 100%;
        border-radius: 20px 20px 0px 20px;
        font-size: 12px;
    }
`
const SendButton = styled.input`
    border: 0;
    background-color: transparent;
    font-weight: 100;
    transition: 1.2s ease;
    @media (min-width: 1200px) {
        font-size: 18px;
    }
`
const MessageSent = styled.p`
    font-size: 14px;
    text-align: center;
    margin-left: 10px;
    @media (min-width: 1200px) {
        font-size: 18px;
    }
`

const Form = ({open}) => {

    const [ emailValue, setEmailValue ] = useState('')
    const [ messageValue, setMessageValue ] = useState('')
    const [ formSent, setFormSent ] = useState(false)
    const [ formOpen, setFormOpen ] = useState(open)
    const [contactNumber, setContactNumber] = useState("000000");

    const generateContactNumber = () => {
        const numStr = "000000" + (Math.random() * 1000000 | 0);
        setContactNumber(numStr.substring(numStr.length - 6));
    }

    const handleClick = () => {
        setFormOpen(!formOpen)
    } 

    const handleChangeMail = e => {
        e.preventDefault()
        setEmailValue(e.target.value)
    }

    const handleChangeMessage = e => {
        e.preventDefault()
        setMessageValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setFormSent(!formSent)
        setEmailValue('')
        setMessageValue('')

        generateContactNumber();
        sendForm('default_service', 'template_23orro2', '#contact-form')
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
            console.log('FAILED...', error);
            });
    }

    useEffect(() => {
        formSent && setTimeout(() => {
            setFormSent(!formSent)
            setFormOpen(!formOpen)
        }, 5000)
    }, [formSent, formOpen]);



    return(
        <FormContainer id='contact-form' onSubmit={handleSubmit} formOpen={formOpen} formSent={formSent}>
            {
            formSent 
            ?<MessageSent>Tu mensaje ha sido enviado, muchas gracias por tu consulta!</MessageSent>
            : !formOpen 
                ?<Title onClick={handleClick}>* PEDI TU PRESUPUESTO</Title>
                :<>
                <Title onClick={handleClick}>* PEDI TU PRESUPUESTO</Title>
                <Description>Dejanos tus datos y te enviamos tu presupuesto personalizado</Description>
                <EmailInput 
                onChange={handleChangeMail}
                type="email"
                required
                placeholder="E-MAIL"
                name="user_email"
                value={emailValue}
                />
                <Message
                onChange={handleChangeMessage}
                cols="15" 
                rows="2" 
                name="user_message"
                value={messageValue}
                required/>
                <input type='hidden' name='contact_number' value={contactNumber} />
                <SendButton type="submit" value="/ ENVIAR"/></>
            }
        </FormContainer>
    )
}

export default Form;