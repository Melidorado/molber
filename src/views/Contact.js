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
const SocialLink = styled.a`

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
const Info = styled.a`
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
                    <SocialLink href="https://www.facebook.com/molberargentina/" target="_blank"><FacebookIcon/></SocialLink>
                    <SocialLink href="https://www.instagram.com/molber_/" target="_blank"><InstagramIcon/></SocialLink>
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
                            <Info href="mailto:ventas@mol-ber.com" target="_blank">VENTAS@MOL-BER.COM</Info>
                        </Item>
                        <Item>
                            <IconContainer><WhatsAppIcon/></IconContainer>
                            <Info href="https://wa.me/5491124081698?text=Hola!%20Quiero%20consultarles%20por%20un%20producto" target="_blank">152408-1698</Info>
                        </Item>
                        <Item>
                            <IconContainer><LocationOnIcon/></IconContainer>
                            <Info href="https://www.google.com.ar/maps/place/Molber,+Distribuidora+Mayorista/@-34.8392997,-58.4258095,17z/data=!4m13!1m7!3m6!1s0x95bcd464a4fd296f:0xde202c3e6a5b7f60!2sGral.+Madariaga+1612,+Burzaco,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.8392997!4d-58.4236208!3m4!1s0x95bcd323f033a0e7:0x465c4b149787cf2a!8m2!3d-34.8392648!4d-58.423621" target="_blank">
                                GENERAL MADARIAGA 1612</Info>
                        </Item>
                        <Item>
                            <IconContainer><LocationOnIcon/></IconContainer>
                            <Info href="https://www.google.com.ar/maps/place/Molber,+Distribuidora+Mayorista/@-34.8392997,-58.4258095,17z/data=!4m13!1m7!3m6!1s0x95bcd464a4fd296f:0xde202c3e6a5b7f60!2sGral.+Madariaga+1612,+Burzaco,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.8392997!4d-58.4236208!3m4!1s0x95bcd323f033a0e7:0x465c4b149787cf2a!8m2!3d-34.8392648!4d-58.423621" target="_blank">
                                PARQUE INDUSTRIAL, BURZACO, PROV. DE BS AS, ARGENTINA</Info>
                        </Item>
                    </InfoContainer>
                </FormInfoContainer>
            </ContactContainer>
        </Container>
    )
}

export default Contact;