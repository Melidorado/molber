import styled from 'styled-components';

const CurrentSectionContainer = styled.div`
    width: 45px;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border: 1px solid black;
    border-left: none;
    padding-bottom:150px;

    &:hover{
        background-color: ${props => props.theme.colors.primary};
    }

    @media (min-width: 1200px){
        width: 55px;
    }
    @media (max-width: 991.98px) {
        width: 35px;
    }
`
const LinkContainer = styled.div`
    display: flex;
    align-items: flex-start;
    transform: rotate(270deg);
`
const Number = styled.p`
    font-size: 13px;
    font-weight: lighter;
    font-style: italic;
    margin-right: 6px;
    @media (min-width: 1200px){
        font-size: 15px;
    }
    @media (max-width: 991.98px) {
        font-size: 10px;
    }
`
const ItemName = styled.p`
    font-size: ${props => props.theme.sizes.h3};
    @media (min-width: 1200px){
        font-size: 20px;
    }
    @media (max-width: 991.98px) {
        font-size: 14px;
    }
`

const CurrentSection = ({number, item}) => {
    return(
        <CurrentSectionContainer>
            <LinkContainer>
                <Number>{number}</Number>
                <ItemName>{item}</ItemName>
            </LinkContainer>
        </CurrentSectionContainer>
    )
}

export default CurrentSection;