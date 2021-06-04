import styled from 'styled-components';
import CurrentSection from '../components/CurrentSection'

const UsContainer = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.background};
    position: absolute;
    top: 0;
    display: flex;
`
const MisionVisionContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: blanchedalmond;
`
const Title = styled.h1`
    font-size: ${props => props.theme.sizes.h1};
`

const Us = () => {
    return(
        <UsContainer>
            <CurrentSection
            number="04"
            item="NOSOTROS"
            />
            <MisionVisionContainer>

            </MisionVisionContainer>
        </UsContainer>
    )
}

export default Us;