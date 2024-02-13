import React from 'react'
import { useForm } from './hooks/useForm'

export const SearchBar = ({onHandleValueSearchSubmit}) => {

const {stateform, onChangeForm} = useForm({searchValue:''})

const {searchValue} = stateform;


const onSubmit = (e) =>{
    e.preventDefault()
    onHandleValueSearchSubmit(searchValue)
}

  return (
    <form 
    className="form-group col-md-6 m-auto"
    onSubmit={onSubmit}>
    <label className="col-form-label mt-4">
     Search
    </label>
    <input
      type="text"
      className="form-control"
      placeholder="Name heroe, DC Comics, Marvel Comics"
      name="searchValue"
      value={searchValue}
      onChange={onChangeForm}
    />
  </form>
  )
}
