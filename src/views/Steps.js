import styled from 'styled-components';
import CurrentSection from '../components/CurrentSection';
import Step from '../components/Step';
import Form from '../components/Form';

const Container = styled.section`
    width: 100vw;
    height: auto;
    min-height: 100vh;
    background-color: ${props => props.theme.colors.background};
    position: absolute;
    top: 0;
    display: flex;
`
const StepsContainer = styled.div`
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

const Steps = () => {

    const steps = [
        {
            number:"1",
            title:"MOVIMIENTO DE SUELOS", 
            description:"Se recomienda realizar un estudio geológico para determinar la resistencia mecánica del suelo y realizar así, un cálculo estructural preciso de la fundación. Asimismo, se realiza la nivelación del terreno donde se ejecutará la fundación, en el común de los casos, en hormigón armado (H°A°).",
            photo:"etapa1"
        },
        {
            number:"2",
            title:"EJECUCIÓN DE LA FUNDACIÓN EN HORMIGÓN ARMADO",
            description:"Ya con los cálculos estructurales se procede a la ejecución de la fundación en H°A°, la misma consta de: colocación de film de polietileno de 200 micrones para aislar de la humedad natural del terreno, canalizaciones para las instalaciones que deban pasar por debajo de la misma y llenado con H°A° el cual quedara nivelado para el correcto apoyo de los paneles.",
            photo:"etapa2"
        },
        {
            number:"3",
            title:"MONTAJE DE LA ESTRUCTURA METÁLICA",
            description:"Se ubican uno a uno los paneles en su posición definitiva según plano de referencia sobre bandas acústicas, fijándolos a la fundación de manera provisoria.",
            photo:"etapa3"
        },
        {
            number:"4",
            title:"RIGIDIZACIÓN ESTRUCTURAL",
            description:"Así, se procede a la rigidización estructural con placas de OSB y cruces de San Andrés, según indiquen los cálculos de ingeniería, para realizar el anclaje definitivo de la estructura mediante anclajes químicos y mecánicos.",
            photo:"etapa4"
        },
        {
            number:"5",
            title:"ENVOLVENTE EXTERIOR",
            description:"Se realiza la aislación hidrófuga colocando la barrera de agua y viento sobre las placas de rigidización, una vez cubierta, se implementa la aislación térmica exterior mediante placas de poliestireno expandido de alta densidad (min. 20Kg/m3), vinculadas al sustrato con tornillos, y arandelas plásticas conocidas como Washer.",
            photo:"etapa5"
        },
        {
            number:"6",
            title:"TERMINACIONES INTERIORES",
            description:"En base a la propuesta del proyecto, puede optarse por diferentes tipos de revestimiento tales como placas de yeso, madera, pvc, etc.",
            photo:"etapa6"
        },
        {
            number:"7",
            title:"CUBIERTAS",
            description:"Las cubiertas pueden ser inclinadas o cubierta plana con losa húmeda, en este último caso, se rigidiza con chapa sinusoidal aislada con EPS.",
            photo:"etapa7"
        },
    ]

    const windowSize = window.innerWidth

    return(
        <Container>
            {windowSize > 767.98 &&
            <CurrentSection
            number="03"
            item="PROCESOS"
            />}
            <StepsContainer>
                {steps.map( step => 
                    <Step
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    photo={step.photo}
                    key={`${step.number}-${step.title}`}
                    />)}
            </StepsContainer>
            <Form open={false}></Form>
        </Container>
    )
}

export default Steps;