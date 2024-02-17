"use client"
import { SearchBarNameProps } from '@/types';
import React, { useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react'
import Image from "next/image";
import { names } from '@/constants';


const SearchBarName = ({ menuName, setMenuName}: SearchBarNameProps ) => {
    const [query, setQuery] = useState('');
    const filteredNames = query === "" ? names : names.filter((item) => (
        item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
    ));
  return (
    <div className='search-name'>
        <Combobox value={menuName} onChange={setMenuName}>
            <div className='relative w-full'>
                <Combobox.Input className={"search-name__input"} placeholder='Enter the name here...' displayValue={(name: string) => name} onChange={(e) => setQuery(e.target.value)}/>

                <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={() => setQuery('')}>
                    <Combobox.Options>
                        {filteredNames.length === 0 && query !== "" ? (
                            <Combobox.Option value={query} className={"search-name__option"}>
                                Create "{query}"
                            </Combobox.Option>
                        ) : (
                            filteredNames.map((item) => (
                                <Combobox.Option key={item} className={({ active }) => `relative search-name__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`} value={item}>{({ selected, active }) => (
                                    <>
                                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                        {item}
                                      </span>

                                      {selected ? (
                                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}></span>
                                      ) : null}
                                    </>
                                  )}</Combobox.Option>
                            ))
                        )}
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchBarName;
