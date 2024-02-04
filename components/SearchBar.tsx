"use client"
import React, { useState } from 'react';
import { SearchBarName } from '.';

const SearchBar = () => {
    const [menuName, setMenuName] = useState('');

    const handleSearch = () => {

    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchBarName menuName={menuName} setMenuName={setMenuName}/>
        </div>
    </form>
  )
}

export default SearchBar;
