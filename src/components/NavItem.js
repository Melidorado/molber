import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Item = styled.button `
    width: ${props => props.open ?'100%' :'calc(100% / 5)'};
    height:${props => props.open ?'45px' :'100%'};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.background};
    border: 0;
    border-left: ${props => !props.open &&'1px solid black'};
    border-top: ${props => props.open &&'1px solid black'};
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme.colors.primary};
    }
`
const LinkContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`
const StyledLink = styled(Link)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Number = styled.p`
    font-size: 13px;
    font-weight: lighter;
    font-style: italic;
    margin-right: 3px;
    @media (min-width: 1200px) {
        font-size: 15px;
    }
    @media (max-width: 991.98px) {
        font-size: 10px;
    }
    @media (max-width: 350px){
        font-size: 8px;
    }
`
const ItemName = styled.p`
    font-size: ${props => props.theme.sizes.h3};
    @media (min-width: 1200px) {
        font-size: 20px;
    }
    @media (max-width: 991.98px) {
        font-size: 14px;
    }
    @media (max-width: 350px){
        font-size: 11px;
    }
`

const NavItem = ({number, item, route, open = false, handleClickMenu}) => {

    return (
        <Item open={open} onClick={handleClickMenu}>
            <StyledLink to={route}>
            <LinkContainer>
                <Number>{number}</Number>
                <ItemName>{item}</ItemName>
            </LinkContainer>
            </StyledLink>
        </Item>
    )
}

export default NavItem;