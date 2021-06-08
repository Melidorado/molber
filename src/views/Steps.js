import styled from 'styled-components';
import CurrentSection from '../components/CurrentSection';
import Step from '../components/Step';

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.background};
    position: absolute;
    top: 0;
    display: flex;
`
const StepsContainer = styled.div`
    height: calc(100% - 112px);
    width: calc(100% - 45px);
    background-color: ${props => props.theme.colors.background};
    position: absolute;
    top: 112px;
    left: 45px;
`

const Steps = () => {

    const steps = [
        {
            number:"1",
            title:"MOVIMIENTO DE SUELOS", 
            description:"Se recomienda realizar el estudio geológico para determinar la resistencia mecánica del suelo de fundación y se procede al cálculo estructural de la fundación."
        },
        {
            number:"2",
            title:"EJECUCIÓN DE LA FUNDACIÓN EN HORMIGÓN ARMADO",
            description:"Ejecución de la fundación en hormigón armado, Colocación de film de polietileno de 200 micrones para aislar de la humedad natural del terreno. La base de apoyo debe estar perfectamente nivelada para recibir los paneles. Se dejarán previstas las canalizaciones para todas las instalaciones que deban pasar por debajo de ésta."
        },
        {
            number:"3",
            title:"MONTAJE DE LA ESTRUCTURA METÁLICA",
            description:"Se ubican uno a uno los paneles en su posición definitiva. Para luego fijarlos a la fundación de manera provisoria."
        },
        {
            number:"4",
            title:"RIGIDIZACIÓN ESTRUCTURAL",
            description:"Rigidización estructural con placas de OSB y según se indique en la ingeniería las cruces de San Andrés. Se procede al anclaje definitivo de la estructura, mediante anclajes químicos y mecánicos."
        },
        {
            number:"5",
            title:"ENVOLVENTE EXTERIOR",
            description:"Aislación hidrófuga se coloca la barrera de agua y viento. Aislación térmica exterior: se implementa en el exterior el uso de placas de poliestireno expandido de alta densidad (min 20kg/m3), atornilladas al sustrato vinculadas mediante a arandelas plásticas,llamadas Washer. Aislación térmica interior: utilización de lana de vidrio de 100mm la misma puede venir acompañada de un film de aluminio que actúa como barrera de vapor."
        },
        {
            number:"6",
            title:"TERMINACIONES INTERIORES",
            description:"Se pueden utilizar diferentes tipos de revestimientos según la propuesta del proyecto, placas de yeso, madera, pvc, etc."
        },
        {
            number:"7",
            title:"CUBIERTAS",
            description:"Las cubiertas pueden ser inclinadas, para el caso de cubierta plana y losa húmeda, se rigidiza con chapa sinusoidal,se aísla con EPS"
        },
    ]
    return(
        <Container>
            <CurrentSection
            number="03"
            item="PROCESOS"
            />
            <StepsContainer>
                {steps.map( step => 
                    <Step
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    key={`${step.number}-${step.title}`}
                    />)}
            </StepsContainer>
        </Container>
    )
}

export default Steps;