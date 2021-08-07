import { useParams } from "react-router-dom";
import styled from 'styled-components';
import CurrentSection from '../components/CurrentSection';

import Form from '../components/Form';


const Container = styled.section`
    width: 100vw;
    height: auto;
    min-height: 100vh;
    background-color: ${props => props.theme.colors.background};
    position: absolute;
    top: 0;
    display: flex;
`
const ProductContainer = styled.div`
    height: auto;
    width: calc(100% - 45px);
    background-color: ${props => props.theme.colors.background};
    position: relative;
    padding-top: 112px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1200px){
        width: calc(100% - 55px);
        padding-top: 122px;
    }
    @media (max-width: 991.98px){
        width: calc(100% - 35px);
    }
    @media (max-width: 767.98px){
        width: 100%;
        padding-top: 68px;
    }
`
const CategorieButton = styled.button`
    padding: 0 20px;
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border:0;
    border-bottom: 1px solid black !important;
    background-color: ${props => props.theme.colors.background};
    cursor: pointer;
    margin-bottom: 40px;

    &:hover {
        background-color: ${props => props.theme.colors.primary};
    }
    @media (min-width: 1200px){
        height: 55px;
    }
    @media (max-width: 767.98px){
        margin-bottom: 0;
    }
    @media (max-width: 475px){
        padding: 0 10px;
    }
`
const TitleContainer = styled.div`
    display: flex;
    align-items: baseline;
`

const Title = styled.p`
    font-size: ${props => props.theme.sizes.h2};
    margin-left: 20px;
    font-weight: 100 !important;
    @media (min-width: 1200px){
        font-size: 25px;
    }
    @media (max-width: 767.98px){
        font-size: 18px;
        margin-left: 10px;
    }
    @media (max-width: 575.98px){
        font-size: 17px;
    }
    @media (max-width: 475px){
        font-size: 14px;
    }
    @media (max-width: 350px){
        font-size: 10px;
    }
`
const GroupTitle = styled.p`
    font-size: ${props => props.theme.sizes.h3};
    font-weight: bold;
    margin-left: 20px;
    @media (min-width: 1200px){
        font-size: 20px;
    }
    @media (max-width: 767.98px){
        font-size: 14px;
    }
    @media (max-width: 475px){
        font-size: 11px;
    }
    @media (max-width: 350px){
        font-size: 10px;
        margin-left: 10px;
    }
`

const ImageContainer = styled.div`
    width: 90%;
    height: 70%;
    border-radius: 50px 50px 0px 0px;
    background-image: ${props => props.photo && `url('/${props.photo}.jpg')`};
    background-position: center;
    background-size: cover;
    @media (max-width: 767.98px){
        width: 100%;
        height: 100%;
        border-radius: 0px;
    }
`

const Product = () => {

    let params = useParams();

    const modifiedStrings = (str) => {
        if (str === "construccion-en-seco") {
            return "CONSTRUCCIÓN EN SECO"
        }
        else if (str === "aislacion") {
            return "AISLACIÓN"
        }
        else {
            return str.replaceAll('-',' ').toUpperCase()
        }
    }

    let category = modifiedStrings(params.category)
    let group = modifiedStrings(params.product)

    const windowSize = window.innerWidth

    return(
        <Container>
            {windowSize > 767.98 &&
            <CurrentSection
            number="02"
            item="PRODUCTOS"
            />}
            <ProductContainer>
                <CategorieButton>
                    <TitleContainer>
                        <Title>/</Title>
                        <Title>{category}</Title>
                        <Title>/</Title>
                        <GroupTitle>{group}</GroupTitle>
                    </TitleContainer>
                </CategorieButton>
                <ImageContainer photo={`${params.category}-${params.product}`}>
                </ImageContainer>
            </ProductContainer>
            <Form open={false}></Form>
        </Container>
    )
}

export default Product;