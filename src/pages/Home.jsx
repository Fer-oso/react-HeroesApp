import React, { useState } from 'react'
import { HeroeList } from './heroes/components/HeroeList'
import { Header } from '../componets/components/header/Header';
import { SearchBar } from '../componets/components/searchbar/SearchBar';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';


export const Home = () => {

  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [valueSearch, setValueSearch] = useState(q);

  const onHandleValueSearchSubmit = (valueSearch) => {
    setValueSearch(valueSearch)
  }

  return (
    <>

      <Header />
      <div className='container'>
        <SearchBar onHandleValueSearchSubmit={onHandleValueSearchSubmit} />

        <HeroeList valueSearch={valueSearch} />
      </div>

    </>
  )
}
