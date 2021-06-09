import styled from 'styled-components';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useState } from 'react';

import Group from '../components/Group';

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

    &:hover {
        background-color: ${props => props.theme.colors.primary};
    }
`
const TitleContainer = styled.div`
    display: flex;
`

const Title = styled.p`
    font-size: ${props => props.theme.sizes.h2};
    margin-left: 20px;
    font-weight: 100 !important;
`
const GroupsContainer = styled.section`
    width: 100%;
    height: auto;
    border-bottom: 0;
    display: flex;
    flex-direction: column;
    max-height: ${(props) => (props.open ? 'auto' : '0')};
    transition: all 0.5s ease-in-out;
    overflow: hidden;
`

const ProductCategorie = ({name, groups}) => {

    const [showMore, setShowMore ] = useState(false)
    
    return(
        <>
        <CategorieButton onClick={() => setShowMore(!showMore)}>
            <TitleContainer>
                <Title>/</Title>
                <Title>{name}</Title>
            </TitleContainer>
            <ArrowForwardIcon/>
        </CategorieButton>
        <GroupsContainer open={showMore}>
            {groups.map( (group, i) =>
                <Group
                group={group}
                open={showMore}
                key={`${i}-${group}`}
                />
                )}
        </GroupsContainer>
    </>
    )
}

export default ProductCategorie;