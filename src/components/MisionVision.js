import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 50%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 60px;
    border-bottom: 1px solid black;
    @media (min-width: 1200px){
        padding: 60px 160px;
    }
    @media (max-width: 767.98px){
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    @media (max-width: 475px){
        padding: 30px;
    }
    @media (max-width: 350px){
        padding: 20px;
    }
`

const Title = styled.h1`
    font-size: ${props => props.theme.sizes.h1};
    @media (max-width: 767.98px){
        margin-bottom: 20px;
    }
    @media (max-width: 575.98px){
        font-size: 55px;
    }
    @media (max-width: 475px){
        font-size: 45px;
    }
    @media (max-width: 350px){
        font-size: 35px;
    }
`
const DescriptionContainer = styled.div`
    width: 40%;
    @media (max-width: 767.98px){
        width: 100%;
    }
`
const Description = styled.p`
    font-size: ${props => props.theme.sizes.p};
    font-weight: lighter;
    @media (min-width: 1200px){
        font-size: 18px;
    }
    @media (max-width: 575.98px){
        font-size: 13px;
    }
    @media (max-width: 475px){
        font-size: 11px;
    }
    @media (max-width: 350px){
        font-size: 10px;
    }
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