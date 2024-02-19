import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'

export const SearchBar = ({ onHandleValueSearchSubmit }) => {

  const navigate = useNavigate();

  const { stateform, onChangeForm } = useForm({searchValue:''})

  const { searchValue } = stateform;

  const onSubmit = (e) => {

    e.preventDefault()

    navigate(`?q=${searchValue}`)

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
