import styled from 'styled-components';

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
`
const GroupTitle = styled.p`
    font-size: ${props => props.theme.sizes.h3};
    font-weight: bold;
`

const Group = ({group, open}) => {
    return (
        <GroupsContainer open={open}>
            <GroupTitle>{group}</GroupTitle>
        </GroupsContainer>
    )
}

export default Group;