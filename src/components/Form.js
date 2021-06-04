import styled from 'styled-components';

const FormContainer = styled.form`
    width: 205px;
    height: 305px;
    background-color: ${props => props.theme.colors.background};
    border: 1px solid black;
    border-radius: 140px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    bottom: 120px;
    right: 50px;
    padding: 50px 20px 0;
`

const Title = styled.p `
    font-size: 20px;
    font-weight: lighter;
    font-style: italic;
    text-align: right;
    margin-bottom: 15px;
`
const Description = styled.p`
    font-size: 11px;
    text-align: right;
    margin-bottom: 15px;
    font-weight: 100;
`
const EmailInput = styled.input`
    padding: 7px 0;
    border: 0;
    border-bottom: 1px solid;
    margin-bottom: 15px;
`
const Message = styled.textarea`
    padding: 10px;
    border-radius: 50px 50px 0px 50px;
    border: 1px solid black;
    margin-bottom: 12px;
`
const SendButton = styled.input`
    border: 0;
    background-color: transparent;
    font-weight: 100;

`

const Form = () => {
    return(
        <FormContainer>
            <Title>* PEDI TU PRESUPUESTO</Title>
            <Description>Dejanos tus datos y te enviamos tu presupuesto personalizado</Description>
            <EmailInput 
            type="email"
            required
            placeholder="E-MAIL"/>
            <Message name="mensaje" cols="15" rows="2"></Message>
            <SendButton type="submit" value="/ ENVIAR"/>
        </FormContainer>
    )
}

export default Form;