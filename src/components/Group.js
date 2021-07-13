import styled from 'styled-components';
import { Link } from "react-router-dom";

const GroupsContainer = styled.button`
    width: 100%;
    height: 30px;
    background-color: ${props => props.theme.colors.background};
    border: 0;
    border-bottom: ${(props) => (props.open ? '1px solid black' : '0')} !important;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 55px;
    &:hover {
        background-color: ${props => props.theme.colors.primary};
    }
`
const GroupTitle = styled.p`
    font-size: ${props => props.theme.sizes.h3};
    font-weight: bold;
`

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`

const Group = ({group, open, category}) => {

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    } 
    const categoryModified = removeAccents(category).replaceAll(' ','-').toLowerCase()
    const groupModified = removeAccents(group).replaceAll(' ','-').toLowerCase()

    return (
        <GroupsContainer open={open}>
            <StyledLink to={`/productos/${categoryModified}/${groupModified}`}>
                <GroupTitle>{group}</GroupTitle>
            </StyledLink>
        </GroupsContainer>
    )
}

export default Group;