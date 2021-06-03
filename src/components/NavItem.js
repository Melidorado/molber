import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Item = styled.button `
    width: calc(100% / 5);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.background};
    border: 0;
    border-left: 1px solid black;
`

const LinkContainer = styled.div`
    display: flex;
    align-items: flex-start;
`
const Number = styled.p`
    font-size: 13px;
    font-weight: lighter;
    font-style: italic;
    margin-right: 3px;
`
const ItemName = styled.p`
    font-size: ${props => props.theme.sizes.h3};
`

const NavItem = ({number, item, route}) => {
    return (
        <Item>
            <LinkContainer>
                <Number>{number}</Number>
                <ItemName><Link to={route}>{item}</Link></ItemName>
            </LinkContainer>
        </Item>
    )
}

export default NavItem;