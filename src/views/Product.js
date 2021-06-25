import { useParams } from "react-router-dom";
import styled from 'styled-components';
import CurrentSection from '../components/CurrentSection';


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
`
const TitleContainer = styled.div`
    display: flex;
    align-items: baseline;
`

const Title = styled.p`
    font-size: ${props => props.theme.sizes.h2};
    margin-left: 20px;
    font-weight: 100 !important;
`
const GroupTitle = styled.p`
    font-size: ${props => props.theme.sizes.h3};
    font-weight: bold;
    margin-left: 20px;
`

const ImageContainer = styled.div`
    width: 90%;
    height: 70%;
    border-radius: 50px 50px 0px 0px;
    background-image: ${props => props.photo && `url('/${props.photo}.jpg')`};
    background-position: center;
    background-size: cover;
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

    return(
        <Container>
            <CurrentSection
            number="02"
            item="PRODUCTOS"
            />
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
        </Container>
    )
}

export default Product;