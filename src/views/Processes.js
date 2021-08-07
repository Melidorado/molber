import styled from 'styled-components';
import CurrentSection from '../components/CurrentSection';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Form from '../components/Form';

import {Link} from 'react-router-dom';

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.background};
    position: absolute;
    top: 0;
    display: flex;
`
const ProcessesContainer = styled.div`
    height: auto;
    width: calc(100% - 45px);
    background-color: ${props => props.theme.colors.background};
    position: relative;
    padding-top: 112px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
const DescriptionContainer = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 60px;
    @media (min-width: 1200px){
        padding: 60px 120px;
    }
    @media (max-width: 767.98px){
        flex-direction: column;
        align-items: flex-start;
        height: auto;
        padding: 50px;
    }
    @media (max-width: 475px){
        padding: 30px;
    }
    @media (max-width: 350px){
        padding: 20px;
    }
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    @media (max-width: 767.98px){
        width: 80%;
        margin-bottom: 30px;
    }
    @media (max-width: 350px){
        margin-bottom: 20px;
    }
`

const Title = styled.h1`
    font-size: ${props => props.theme.sizes.h1};
    text-align: ${props => props.right ? 'right' : 'left'};
    @media (max-width: 575.98px){
        font-size: 60px;
    }
    @media (max-width: 475px){
        font-size: 50px;
    }
    @media (max-width: 350px){
        font-size: 40px;
    }
`
const Subtitle = styled.p`
    font-size: ${props => props.theme.sizes.h2};
    font-weight: lighter;
    @media (max-width: 575.98px){
        font-size: 19px;
    }
    @media (max-width: 350px){
        font-size: 17px;
    }
`
const DescriptionText = styled.p`
    font-size:${props => props.theme.sizes.p};
    text-align: left;
    @media (max-width: 575.98px){
        font-size: 12px;
    }
    @media (max-width: 350px){
        font-size: 10px;
    }
`
const DescriptionTextContainer = styled.div`
    width: 50%;
    @media (max-width: 767.98px){
        width: 100%;
    }
`
const StepsButton = styled.div`
    padding: 0 20px;
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    background-color: ${props => props.theme.colors.background};
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.colors.primary};
    }
`
const StepTitleContainer = styled.div`
    display: flex;
`

const StepTitle = styled.p`
    font-size: ${props => props.theme.sizes.h2};
    margin-left: 20px;
    @media (max-width: 475px){
        font-size: 18px;
    }
    @media (max-width: 350px){
        font-size: 15px;
    }
`
const StyledLink = styled(Link)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Processes = () => {

    const windowSize = window.innerWidth

    return(
        <Container>
            {windowSize > 767.98 &&
            <CurrentSection
            number="03"
            item="PROCESOS"
            />}
            <ProcessesContainer>
                <DescriptionContainer>
                    <TitleContainer>
                        <Title>Steel</Title>
                        <Title right>framing</Title>
                        <Subtitle>/etapas de construcción</Subtitle>
                    </TitleContainer>
                    <DescriptionTextContainer>
                        <DescriptionText>
                        Partiendo ya con al anteproyecto consensuado con el cliente. Se continua con la etapa de proyecto, que consta de: generar toda la documentación técnica gráfica necesaria para llevar a cabo la ejecución de la obra y las correspondientes presentaciones ante los organismos reguladores de la actividad de la construcción.
                        Una vez obtenido el permiso municipal de obra ya podemos entrar en el terreno de lo constructivo.
                        </DescriptionText>
                    </DescriptionTextContainer>
                </DescriptionContainer>
                <StyledLink to="/procesos/etapas">
                    <StepsButton>
                        <StepTitleContainer>
                            <StepTitle>/</StepTitle>
                            <StepTitle>Etapas</StepTitle>
                        </StepTitleContainer>
                        <ArrowForwardIcon/>
                    </StepsButton>
                </StyledLink>

            </ProcessesContainer>
            <Form open={false}></Form>
        </Container>
    )
}

export default Processes;