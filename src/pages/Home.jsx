import React, { useState } from 'react'
import { HeroeList } from './heroes/components/HeroeList'
import { SearchBar } from '../componets/SearchBar'

export const Home = () => {
  
 const [valueSearch, setValueSearch] = useState('');

  const onHandleValueSearchSubmit = (valueSearch) =>{
    setValueSearch(valueSearch)
  }

  return (
    <div className='container m-auto'>
    <SearchBar onHandleValueSearchSubmit = {onHandleValueSearchSubmit}/>
    <HeroeList valueSearch={valueSearch}/>
    </div>
  )
}
