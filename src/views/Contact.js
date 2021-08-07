import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CurrentSection from '../components/CurrentSection';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';

import{ init, sendForm } from 'emailjs-com';
init("user_1dlORuW3dyDHG1NnI1cjI");



const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.background};
    position: absolute;
    top: 0;
    display: flex;
`

const ContactContainer = styled.div`
    height: auto;
    width: calc(100% - 45px);
    background-color: ${props => props.theme.colors.background};
    position: relative;
    padding-top: 112px;
    @media (min-width: 1200px){
        width: calc(100% - 55px);
        padding-top: 122px;
    }
    @media (max-width: 991.98px){
        width: calc(100% - 35px);
    }
    @media (max-width: 767.98px){
        width: 100%;
        padding-top: 68px;
    }
`
const SocialMediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 30px;
`
const SocialLink = styled.a`

`

const FormInfoContainer = styled.div`
    display: flex;
    width: 100%;
    padding-top: 10px;
    @media (max-width: 767.98px){
        flex-direction: column;
    }
    @media (max-width: 475px){
        padding-top: 0;
    }
`

const FormContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 767.98px){
        width: 100%;
        padding: 40px
    }
    @media (max-width: 475px){
        padding: 30px
    }
    @media (max-width: 350px){
        padding: 20px 10px;
    }
`
const InfoContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 767.98px){
        width: 100%;
        height: auto;
    }
`
const Item = styled.article`
    display: flex;
    padding: 5px 20px;
    border-bottom: 1px solid black;
    height: 90px;
    width: 438px;
    align-items: center;
    @media (min-width: 1200px){
        width: 90%;
    }
    @media (max-width: 991.98px){
        width: 90%;
    }
    @media (max-width: 767.98px){
        width: 100%;
        padding: 20px 30px;
    }
`
const IconContainer = styled.div`
    width: 19px;
    font-size: 20px;

`
const Info = styled.a`
    font-size: 15px;
    font-weight: lighter;
    font-style: oblique;
    margin-left: 30px;
    @media (max-width: 475px){
        font-size: 13px;
    }
    @media (max-width: 350px){
        font-size: 11px;
    }
`
const Form = styled.form`
    width: 240px;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 35px;
    @media (min-width: 1200px){
        width: 60%;
    }
    @media (max-width: 767.98px){
        width: 100%;
        padding-top: 0;
        justify-content: space-between;
        align-items: center;
    }
`

const Title = styled.p `
    font-size: 30px;
    font-weight: lighter;
    font-style: italic;
    text-align: center;
    margin-bottom: 25px;
    @media (max-width: 767.98px){
        text-align: left;
    }
    @media (max-width: 475px){
        font-size: 20px;
    }
    @media (max-width: 350px){
        font-size: 18px;
    }
`
const Description = styled.p`
    font-size: 15px;
    text-align: center;
    margin-bottom: 45px;
    font-weight: 100;
    @media (max-width: 767.98px){
        text-align: left;
    }
    @media (max-width: 475px){
        font-size: 12px;
        margin-bottom: 25px;
    }
    @media (max-width: 350px){
        font-size: 11px;
    }
`
const EmailInput = styled.input`
    padding: 7px 0;
    width: 90%;
    border: 0;
    border-bottom: 1px solid;
    margin-bottom: 20px;
    @media (max-width: 767.98px){
        width: 100%;
    }
`
const Message = styled.textarea`
    padding: 10px;
    width: 90%;
    border-radius: 50px 50px 0px 50px;
    border: 1px solid black;
    margin-bottom: 20px;
    @media (max-width: 767.98px){
        width: 100%;
        border-radius: 20px 20px 0px 20px;
    }
`
const SendButton = styled.input`
    border: 0;
    background-color: transparent;
    font-weight: 100;
`
const SendButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 80px;
    @media (max-width: 767.98px){
        margin-bottom: 10px;
    }
`
const Payments = styled.p`
    font-size: 15px;
    font-weight: lighter;
    @media (max-width: 475px){
        font-size: 12px;
    }
    @media (max-width: 350px){
        font-size: 11px;
    }
`
const MessageSent = styled.p`
    font-size: 14px;
    text-align: center;
    margin-left: 10px;
    position: absolute;
    top: 170px;
    font-weight: 100;
    color: green;
    @media (max-width: 767.98px){
       top: 510px;
       margin-left: 0;
    }
    @media (max-width: 475px){
        font-size: 10px;
        top:465px;
        text-align: left;
    }
    @media (max-width: 350px){
        top: 440px
    }
`

const LeftContainer = styled.div`
    @media (max-width: 767.98px){
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    }
`
const RightContainer = styled.div`
    @media (max-width: 767.98px){
    width: 90%;
    }
`

const Contact = () => {

    const [ emailValue, setEmailValue ] = useState('')
    const [ messageValue, setMessageValue ] = useState('')
    const [ formSent, setFormSent ] = useState(false)
    const [contactNumber, setContactNumber] = useState("000000");

    const generateContactNumber = () => {
        const numStr = "000000" + (Math.random() * 1000000 | 0);
        setContactNumber(numStr.substring(numStr.length - 6));
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
        }, 5000)
    }, [formSent]);

    const windowSize = window.innerWidth

    return(
        <Container>
            {windowSize > 767.98 &&
            <CurrentSection
            number="05"
            item="CONTACTO"
            />}
            <ContactContainer>
            {windowSize > 767.98 &&
                <SocialMediaContainer>
                    <SocialLink href="https://www.facebook.com/molberargentina/" target="_blank"><FacebookIcon/></SocialLink>
                    <SocialLink href="https://www.instagram.com/molber_/" target="_blank"><InstagramIcon/></SocialLink>
                </SocialMediaContainer>}
                <FormInfoContainer>
                    <FormContainer>
                        <Form id='contact-form' onSubmit={handleSubmit} formSent={formSent}>
                            <LeftContainer>
                                <Title>* PEDI TU PRESUPUESTO</Title>
                                <Description>Dejanos tus datos y te enviamos tu presupuesto personalizado</Description>
                            </LeftContainer>
                            <RightContainer>
                                <EmailInput 
                                onChange={handleChangeMail}
                                type="email"
                                required
                                placeholder="E-MAIL"
                                name="user_email"
                                value={emailValue}/>
                                <Message 
                                onChange={handleChangeMessage}
                                cols="15" 
                                rows="7" 
                                name="user_message"
                                value={messageValue}
                                required></Message>
                                <input type='hidden' name='contact_number' value={contactNumber} />
                                <SendButtonContainer>
                                    <SendButton type="submit" value="/ ENVIAR"/>
                                </SendButtonContainer>
                                {formSent && <MessageSent>Tu mensaje ha sido enviado, muchas gracias por tu consulta!</MessageSent>}
                                <Payments>* Mercado Pago, Tarjeta de crédito</Payments>
                            </RightContainer>
                        </Form>
                    </FormContainer>
                    <InfoContainer>
                        <Item>
                            <IconContainer><MailIcon/></IconContainer>
                            <Info href="mailto:ventas@mol-ber.com" target="_blank">VENTAS@MOL-BER.COM</Info>
                        </Item>
                        <Item>
                            <IconContainer><WhatsAppIcon/></IconContainer>
                            <Info href="https://wa.me/5491124081698?text=Hola!%20Quiero%20consultarles%20por%20un%20producto" target="_blank">152408-1698</Info>
                        </Item>
                        <Item>
                            <IconContainer><PhoneIcon/></IconContainer>
                            <Info href="tel:21217502">2121-7502</Info>
                        </Item>
                        <Item>
                            <IconContainer><LocationOnIcon/></IconContainer>
                            <Info href="https://www.google.com.ar/maps/place/Molber,+Distribuidora+Mayorista/@-34.8392997,-58.4258095,17z/data=!4m13!1m7!3m6!1s0x95bcd464a4fd296f:0xde202c3e6a5b7f60!2sGral.+Madariaga+1612,+Burzaco,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.8392997!4d-58.4236208!3m4!1s0x95bcd323f033a0e7:0x465c4b149787cf2a!8m2!3d-34.8392648!4d-58.423621" target="_blank">
                            GENERAL MADARIAGA 1612, PARQUE INDUSTRIAL, BURZACO, PROV. DE BS AS, ARGENTINA</Info>
                        </Item>
                    </InfoContainer>
                </FormInfoContainer>
                {windowSize <= 767.98 &&
                <SocialMediaContainer>
                    <SocialLink href="https://www.facebook.com/molberargentina/" target="_blank"><FacebookIcon/></SocialLink>
                    <SocialLink href="https://www.instagram.com/molber_/" target="_blank"><InstagramIcon/></SocialLink>
                </SocialMediaContainer>}
            </ContactContainer>
        </Container>
    )
}

export default Contact;