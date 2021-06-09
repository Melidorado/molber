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
`
const ItemName = styled.p`
    font-size: ${props => props.theme.sizes.h3};
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