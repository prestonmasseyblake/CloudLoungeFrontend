import React from 'react'
import './Search.css';
import { ReactComponent as Searcher } from './icons/search.svg';
const Search = () => {
    return (
        <div className='search-container'>
        <div className="container">
            <div className='search'>
            <input placeholder="search..."/>
            <button className='search-button'><Searcher/></button>
            </div>
        </div>
        </div>
    )
}

export default Search;
