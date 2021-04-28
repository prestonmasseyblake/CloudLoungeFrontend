import React, {useState} from 'react'
import './Search.css';
import { ReactComponent as Searcher } from './icons/search.svg';
const Search = ({handleSubmit}) => {
    const[term,setTerm]=useState();

    let handleChange = (e) => {
        console.log(e.target.value);
        setTerm(e.target.value);
        
    }
    const handleSearch = (e) => {
        e.preventDefault();
        handleSubmit(term);
    }
    return (
        <div className='search-container'>
        <div className="container">
            <div className='search'>
            <input onChange={(e) => handleChange(e)} placeholder="search..."/>
            <button onClick={(e) => handleSearch(e)}  className='search-button'><Searcher/></button>
            </div>
        </div>
        </div>
    )
}

export default Search;
