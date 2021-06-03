import styled from 'styled-components'
import logo from '../utils/images/logo.png'

import Search from '../components/Search'

const NavBar = styled.nav`
    width: 100vw;
    height: 68px;
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
                <Logo src={logo} alt=""/>
            </LogoContainer>
            <Search/>
        </NavBar>
    )
}

export default Nav;