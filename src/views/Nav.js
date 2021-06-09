import styled from 'styled-components';
import logo from '../utils/images/logo.png';

import {Link} from 'react-router-dom';

import Search from '../components/Search';

const NavBar = styled.nav`
    width: 100vw;
    height: 68px;
    position: relative;
    z-index: 1;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 0 25px;
`

const LogoContainer = styled.div`
    margin-left: 25px;
    width: 197px;
`
const Logo = styled.img`
    width: 100%;
`

const Nav = () => {
    return(
        <NavBar>
            
            <LogoContainer>
            <Link to="/home">
                <Logo src={logo} alt=""/>
                </Link>
            </LogoContainer>
            
            <Search/>
        </NavBar>
    )
}

export default Nav;