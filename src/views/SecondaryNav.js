import styled from 'styled-components';


import NavItem from '../components/NavItem';

const NavBar = styled.nav`
    height: 44px;
    width: 100vw;
    position: relative;
    z-index: 2;
    border-bottom: 1px solid black;
    background-color: red;
    display: flex;
`

const SecondaryNav = () => {
    const links = [
        {
            name: "HOME",
            number: "01",
            route: "/home"
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
        <NavBar>
            {links.map( link =>
                <NavItem
                number={link.number}
                item={link.name}
                route={link.route}
                key={`${link.name}-${link.number}`}
                />
                )}
        </NavBar>
    )
}

export default SecondaryNav;