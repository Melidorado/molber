import styled from 'styled-components';
import CurrentSection from '../components/CurrentSection';
import ProductCategorie from '../components/ProductCategorie';
import Form from '../components/Form'

const Container = styled.section`
    width: 100vw;
    height: auto;
    min-height: 100vh;
    background-color: ${props => props.theme.colors.background};
    position: absolute;
    top: 0;
    display: flex;
`
const ProductsContainer = styled.div`
    height: auto;
    width: calc(100% - 45px);
    background-color: ${props => props.theme.colors.background};
    position: relative;
    padding-top: 112px;
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

const Products = () => {

    const categories = [
        {
            name:"CONSTRUCCIÓN EN SECO",
            id:"01",
            groups:["PLACAS","PERFILES","MASILLA","ENDUIDO","PINTURA","ACCESORIOS","AISLACIÓN"]
        },
        {
            name:"STEELFRAME",
            id:"02",
            groups:["PLACAS","PERFILES","ACCESORIOS","AISLACIONES","REVESTIMIENTOS"]
        },
        {
            name:"PVC",
            id:"03",
            groups:["CIELO RASO","DECK","ZOCALOS"]
        }
    ]

    const windowSize = window.innerWidth

    return(
        <Container>
            {windowSize > 767.98 && 
            <CurrentSection
            number="02"
            item="PRODUCTOS"
            />}
            <ProductsContainer>
                {categories.map( categorie => 
                    <ProductCategorie
                    name={categorie.name}
                    groups={categorie.groups}
                    key={`${categorie.id}-${categorie.name}`}
                    />
                    )}
            </ProductsContainer>
            <Form open={false}></Form>
        </Container>
    )
}

export default Products;