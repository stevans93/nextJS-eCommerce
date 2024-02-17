"use client"
import React, { useState } from 'react';
import { SearchBarName } from '.';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type='submit' className={`-ml-4 z-10 ${otherClasses}`}>
      <Image src='/magnifying-glass.svg' alt='magnifying-glass' width={40} height={40} className='objcet-contain' />
    </button>
  )
}

const SearchBar = () => {
    const [menuName, setMenuName] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(menuName === '') {
        return alert('Please fill in the search bar!');
      }

      updateSearchParams(menuName.toLowerCase());
    }

    const updateSearchParams = (menuName: string) => {
      const searchParams = new URLSearchParams(window.location.search);

      if(menuName) {
        searchParams.set('menuName', menuName);
      } else {
        searchParams.delete('menuName');
      }

      const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

      router.push(newPathName, { scroll: false })
    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchBarName menuName={menuName} setMenuName={setMenuName}/>
            <SearchButton otherClasses="" />
        </div>
    </form>
  )
}

export default SearchBar;
