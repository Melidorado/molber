import styled from 'styled-components';
import Brands_Image from '../utils/images/marcas.png'

import Form from '../components/Form'

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    background-image: url('/portada.jpg');
    background-position: center;
    background-size: cover;
`
const Brands = styled.img`
    width: 65%;
    position: absolute;
    bottom: 0;
`

const Home = () => {
    return(
        <Main>
            <Brands src={Brands_Image}/>
            <Form></Form>
        </Main>
    )
}

export default Home;