import styled from 'styled-components';
import CurrentSection from '../components/CurrentSection';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.background};
    position: absolute;
    top: 0;
    display: flex;
`

const ContactContainer = styled.div`
    height: calc(100% - 112px);
    width: calc(100% - 45px);
    background-color: ${props => props.theme.colors.background};
    position: absolute;
    top: 112px;
    left: 45px;
`
const SocialMediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 30px;
`
const FormInfoContainer = styled.div`
    display: flex;
    width: 100%;
    padding-top: 10px;
`

const FormContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
`
const InfoContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const Item = styled.article`
    display: flex;
    padding: 5px 20px;
    border-bottom: 1px solid black;
    height: 90px;
    width: 438px;
    align-items: center;
`
const IconContainer = styled.div`
    width: 19px;
    font-size: 20px;
`
const Info = styled.p`
    font-size: 15px;
    font-weight: lighter;
    font-style: oblique;
    margin-left: 30px;
`
const Form = styled.form`
    width: 240px;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 35px;
`

const Title = styled.p `
    font-size: 30px;
    font-weight: lighter;
    font-style: italic;
    text-align: center;
    margin-bottom: 25px;
`
const Description = styled.p`
    font-size: 15px;
    text-align: center;
    margin-bottom: 45px;
    font-weight: 100;
`
const EmailInput = styled.input`
    padding: 7px 0;
    width: 90%;
    border: 0;
    border-bottom: 1px solid;
    margin-bottom: 20px;
`
const Message = styled.textarea`
    padding: 10px;
    width: 90%;
    border-radius: 50px 50px 0px 50px;
    border: 1px solid black;
    margin-bottom: 20px;
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
`
const Payments = styled.p`
    font-size: 15px;
    font-weight: lighter;
`

const Contact = () => {

    return(
        <Container>
            <CurrentSection
            number="05"
            item="CONTACTO"
            />
            <ContactContainer>
                <SocialMediaContainer>
                    <FacebookIcon/>
                    <InstagramIcon/>
                </SocialMediaContainer>
                <FormInfoContainer>
                    <FormContainer>
                        <Form>
                            <Title>* PEDI TU PRESUPUESTO</Title>
                            <Description>Dejanos tus datos y te enviamos tu presupuesto personalizado</Description>
                            <EmailInput 
                            type="email"
                            required
                            placeholder="E-MAIL"/>
                            <Message name="mensaje" cols="15" rows="2"></Message>
                            <SendButtonContainer>
                                <SendButton type="submit" value="/ ENVIAR"/>
                            </SendButtonContainer>
                            <Payments>* Mercado Pago, Tarjeta de crédito</Payments>
                        </Form>
                    </FormContainer>
                    <InfoContainer>
                        <Item>
                            <IconContainer><MailIcon/></IconContainer>
                            <Info>VENTAS@MOL-BER.COM</Info>
                        </Item>
                        <Item>
                            <IconContainer><WhatsAppIcon/></IconContainer>
                            <Info>2121-7502</Info>
                        </Item>
                        <Item>
                            <IconContainer><LocationOnIcon/></IconContainer>
                            <Info>ALMIRANTE BROWN 4141</Info>
                        </Item>
                        <Item>
                            <IconContainer><LocationOnIcon/></IconContainer>
                            <Info>TEMPERLEY, ARGENTINA</Info>
                        </Item>
                    </InfoContainer>
                </FormInfoContainer>
            </ContactContainer>
        </Container>
    )
}

export default Contact;