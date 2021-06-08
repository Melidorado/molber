import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

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
    transition: 0.4s;

    &:hover {
        background-color: ${props => props.theme.colors.primary};
        font-weight: 900;
    }
`
const StepTitleContainer = styled.div`
    display: flex;
`

const StepTitle = styled.p`
    font-size: ${props => props.theme.sizes.h2};
    font-weight: lighter;
    margin-left: 20px;
`
const ShowMoreButton = styled.button`
    background-color: transparent;
    border: 0;
`
const MoreContainer = styled.section`
    width: 100%;
    height: 260px;
    border-bottom: ${(props) => (props.open ? '1px solid black' : '0')};
    display: flex;
    justify-content: space-between;
    padding-left: 40px;
    max-height: ${(props) => (props.open ? '260px' : '0')};
    transition: all 0.5s ease-in-out;
    overflow: hidden;
`
const PhotoContainer = styled.div`
    height: 100%;
    width: 55%;
    border-radius: 30px 0px 0px 0px;
    background-image: ${props => props.photo && `url('/${props.photo}.jpg')`};
    background-position: center;
    background-size: cover;
`
const Description = styled.p`
    font-size: 15px;
    font-weight: lighter;
`
const DescriptionContainer = styled.div`
    width: 35%;
    margin-top: 20px;
`


const Step = ({number, title, description, photo}) => {

    const [showMore, setShowMore ] = useState(false)


    return(
        <>
        <StepsButton>
            <StepTitleContainer>
                <StepTitle>{number}</StepTitle>
                <StepTitle>{title}</StepTitle>
            </StepTitleContainer>
            <ShowMoreButton onClick={() => setShowMore(!showMore)}>
                <AddIcon/>
            </ShowMoreButton>
        </StepsButton>
        <MoreContainer open={showMore}>
            <DescriptionContainer>
                <Description>{description}</Description>
            </DescriptionContainer>
            <PhotoContainer photo="portada"></PhotoContainer>
        </MoreContainer>
        </>
    )
}

export default Step;