import Icon from '@material-ui/icons/Search';
import { useState } from 'react';
import styled from 'styled-components'

const SearchContainer = styled.form`
    width: 265px;
    display: flex;
    position: relative;
`
const SearchInput = styled.input`
    padding: 15px;
    width: 100%;
    height: 29px;
    border-radius: 50px;
    background-color: ${props => props.theme.colors.primary};
    border: 0.5px solid black;
`
const Submit = styled.input`
    width: 25px;
    height: 32px;
    background-color: transparent;
    position: absolute;
    left: 9px;
    cursor: pointer;
    border: 0;
`

const SearchIcon = styled.div `
    color: ${props => props.theme.colors.text};
    position: absolute;
    left: 10px;
    top: 5px;
    cursor: pointer;
`

const Search = () => {

    const [ value, setValue ] = useState('')

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return(
        <SearchContainer onSubmit={handleSubmit}>
            <SearchInput
            onChange={handleChange}
            value={value} 
            type="text" 
            />
            <Submit  
            type="submit" 
            value=""/>
            <SearchIcon>
            <Icon id="search-icon" onClick={handleSubmit}/>
            </SearchIcon>
        </SearchContainer>
    )
}

export default Search;