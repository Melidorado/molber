import styled from 'styled-components';
import CurrentSection from '../components/CurrentSection';
import ProductCategorie from '../components/ProductCategorie';

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

    return(
        <Container>
            <CurrentSection
            number="02"
            item="PRODUCTOS"
            />
            <ProductsContainer>
                {categories.map( categorie => 
                    <ProductCategorie
                    name={categorie.name}
                    groups={categorie.groups}
                    key={`${categorie.id}-${categorie.name}`}
                    />
                    )}
            </ProductsContainer>
        </Container>
    )
}

export default Products;