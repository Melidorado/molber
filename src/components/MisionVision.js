import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 50%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 60px;
    border-bottom: 1px solid black;
`

const Title = styled.h1`
    font-size: ${props => props.theme.sizes.h1};
`
const DescriptionContainer = styled.div`
    width: 40%;
`
const Description = styled.p`
    font-size: ${props => props.theme.sizes.p};
    font-weight: lighter;
   
`

const MisionVision = ({title, description}) => {
    return(
        <Container>
            <Title>{title}</Title>
            <DescriptionContainer>
                <Description>{description}</Description>
            </DescriptionContainer>
        </Container>
    )
}

export default MisionVision;