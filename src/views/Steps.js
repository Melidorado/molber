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
            description:"Se recomienda realizar el estudio geológico para determinar la resistencia mecánica del suelo de fundación y se procede al cálculo estructural de la fundación.",
            photo:"etapa1"
        },
        {
            number:"2",
            title:"EJECUCIÓN DE LA FUNDACIÓN EN HORMIGÓN ARMADO",
            description:"Ejecución de la fundación en hormigón armado, Colocación de film de polietileno de 200 micrones para aislar de la humedad natural del terreno. La base de apoyo debe estar perfectamente nivelada para recibir los paneles. Se dejarán previstas las canalizaciones para todas las instalaciones que deban pasar por debajo de ésta.",
            photo:"etapa2"
        },
        {
            number:"3",
            title:"MONTAJE DE LA ESTRUCTURA METÁLICA",
            description:"Se ubican uno a uno los paneles en su posición definitiva. Para luego fijarlos a la fundación de manera provisoria.",
            photo:"etapa3"
        },
        {
            number:"4",
            title:"RIGIDIZACIÓN ESTRUCTURAL",
            description:"Rigidización estructural con placas de OSB y según se indique en la ingeniería las cruces de San Andrés. Se procede al anclaje definitivo de la estructura, mediante anclajes químicos y mecánicos.",
            photo:"etapa4"
        },
        {
            number:"5",
            title:"ENVOLVENTE EXTERIOR",
            description:"Aislación hidrófuga se coloca la barrera de agua y viento. Aislación térmica exterior: se implementa en el exterior el uso de placas de poliestireno expandido de alta densidad (min 20kg/m3), atornilladas al sustrato vinculadas mediante a arandelas plásticas,llamadas Washer. Aislación térmica interior: utilización de lana de vidrio de 100mm la misma puede venir acompañada de un film de aluminio que actúa como barrera de vapor.",
            photo:"etapa5"
        },
        {
            number:"6",
            title:"TERMINACIONES INTERIORES",
            description:"Se pueden utilizar diferentes tipos de revestimientos según la propuesta del proyecto, placas de yeso, madera, pvc, etc.",
            photo:"etapa6"
        },
        {
            number:"7",
            title:"CUBIERTAS",
            description:"Las cubiertas pueden ser inclinadas, para el caso de cubierta plana y losa húmeda, se rigidiza con chapa sinusoidal,se aísla con EPS",
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