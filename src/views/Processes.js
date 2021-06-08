import styled from 'styled-components';
import CurrentSection from '../components/CurrentSection';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
    height: calc(100% - 112px);
    width: calc(100% - 45px);
    background-color: ${props => props.theme.colors.background};
    position: absolute;
    top: 112px;
    left: 45px;
`
const DescriptionContainer = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 60px;
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
`

const Title = styled.h1`
    font-size: ${props => props.theme.sizes.h1};
    text-align: ${props => props.right ? 'right' : 'left'};
`
const Subtitle = styled.p`
    font-size: ${props => props.theme.sizes.h2};
    font-weight: lighter;
`
const DescriptionText = styled.p`
    font-size:${props => props.theme.sizes.p};
    text-align: left;
`
const DescriptionTextContainer = styled.div`
    width: 50%;
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
`


const Processes = () => {
    return(
        <Container>
            <CurrentSection
            number="03"
            item="PROCESOS"
            />
            <ProcessesContainer>
                <DescriptionContainer>
                    <TitleContainer>
                        <Title>Steel</Title>
                        <Title right>framing</Title>
                        <Subtitle>/etapas de contrucción</Subtitle>
                    </TitleContainer>
                    <DescriptionTextContainer>
                        <DescriptionText>
                        Partiendo ya con al anteproyecto consensuado con el cliente. Se continua con la etapa de proyecto, que consta de: generar toda la documentación técnica gráfica necesaria para llevar a cabo la ejecución de la obra y las correspondientes presentaciones ante los organismos reguladores de la actividad de la construcción.
                        Una vez obtenido el permiso municipal de obra ya podemos entrar en el terreno de lo constructivo.
                        </DescriptionText>
                    </DescriptionTextContainer>
                </DescriptionContainer>
                <Link to="/procesos/etapas">
                    <StepsButton>
                        <StepTitleContainer>
                            <StepTitle>/</StepTitle>
                            <StepTitle>Etapas</StepTitle>
                        </StepTitleContainer>
                        <ArrowForwardIcon/>
                    </StepsButton>
                </Link>

            </ProcessesContainer>
        </Container>
    )
}

export default Processes;