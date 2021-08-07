import styled from 'styled-components';
import logo from '../utils/images/logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import NavItem from '../components/NavItem';

import {Link} from 'react-router-dom';
import { useState } from 'react';

/* import Search from '../components/Search'; */

const NavBar = styled.nav`
    width: 100vw;
    height: ${props => props.open  ?`255px` : `68px`};
    position: relative;
    z-index: 1;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: ${props => props.open  ?`flex-start` : `center`};
    border-bottom: 1px solid black;
    padding: ${props => props.open  ?`10px 25px 0` : `10px 25px`};
    @media (max-width: 767.98px){
        justify-content: center;
    }
`

const LogoContainer = styled.div`
    margin-left: 25px;
    width: 197px;
    @media (max-width: 767.98px){
        margin-left: 0;
        width: 170px;
    }
    @media (max-width: 475px){
        width: 35%;
        margin-left: 0;
    }
    @media (max-width: 350px){
        width: 45%;
        margin-left: 0;
    }
`
const Logo = styled.img`
    width: 100%;
`
const LogoMenuContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${props => props.open && '10px'};
`

const Nav = () => {
    const windowSize = window.innerWidth

    const [ openMenu, setOpenMenu ] = useState(false)

    const handleClick = () => {
        setOpenMenu(!openMenu)
    }

    const links = [
        {
            name: "HOME",
            number: "01",
            route: "/"
        },
        {
            name: "PRODUCTOS",
            number: "02",
            route: "/productos"
        },
        {
            name: "PROCESOS",
            number: "03",
            route: "/procesos" 
        },
        {
            name: "NOSOTROS",
            number: "04",
            route: "/nosotros" 
        },
        {
            name: "CONTACTO",
            number: "05",
            route: "/contacto" 
        }
    ]

    return(
        <NavBar open={openMenu}>
            <LogoMenuContainer open={openMenu}>
                <LogoContainer>
                <Link to="/">
                    <Logo src={logo} alt=""/>
                    </Link>
                </LogoContainer>
                {windowSize <= 767.98 &&
                <MenuIcon onClick={handleClick}/>
                }
            </LogoMenuContainer>
            {openMenu && 
                links.map( link =>
                <NavItem
                number={link.number}
                item={link.name}
                route={link.route}
                key={`${link.name}-${link.number}`}
                open={openMenu}
                handleClickMenu={handleClick}
                />
                )}
            
            {/* <Search/> */}
        </NavBar>
    )
}

export default Nav;