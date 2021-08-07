import styled from 'styled-components';
import CurrentSection from '../components/CurrentSection'
import MisionVision from '../components/MisionVision'

const UsContainer = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.background};
    position: absolute;
    top: 0;
    display: flex;
`
const MisionVisionContainer = styled.div`
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


const Us = () => {

    const items = [
        {
            title: "Filosofía",
            id:"1",
            description: "Somos una empresa joven, enfocada en ofrecer soluciones para la construcción en seco. Nos caracterizamos por tener un grupo de trabajo muy proactivo, predispuesto y  muy dinamico. De tal modo de cumplir con las exigencias del mercado y contribuir para el crecimiento del sistema en Argentina."
        },
        {
            title: "Misión",
            id:"2",
            description: "Distribuir a nivel nacional productos de las marcas referentes de la construccion en seco. De este modo ser una solución para los instaladores, arquitectos y usuarios finales que nos eligen."
        }
    ]

    const windowSize = window.innerWidth

    return(
        <UsContainer>
            {windowSize > 767.98 &&
            <CurrentSection
            number="04"
            item="NOSOTROS"
            />}
            <MisionVisionContainer>
                {items.map( item => 
                    <MisionVision
                    title={item.title}
                    description={item.description}
                    key={`${item.id}-${item.title}`}
                    />)}
            </MisionVisionContainer>
        </UsContainer>
    )
}

export default Us;