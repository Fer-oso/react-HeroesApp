import React, { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../helpers/getHeroById';


import './HeroeCard.css'
export const HeroeCard = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const heroe = useMemo(() => (getHeroById(id)), [id]);

  const onReturnToBack = () => {
    navigate(-1);
  }

  return (
    <div className='about'>
      <div className='main'>
        <img src={heroe.image} alt={heroe.superhero} />
        <div className='about-text'>
          <h1 className='' >{heroe.superhero}</h1>
          <h5 className=''>{heroe.alter_ego}</h5>
          <li className='list-group-item'><p> Publisher: {heroe.publisher}</p></li>
          <li className='list-group-item'><p>First appaearance: {heroe.first_appearance}</p></li>
          <li className='list-group-item'><p>Heroe character: {heroe.characters}</p></li>
          <button className='btn' onClick={onReturnToBack} type='button'>Back</button>
        </div>
      </div>
    </div>
  )

  /** <div className='row mt-4'>
        <div className='col-4'>
          <img src={heroe.image}
          className='img-thumbnail'
          alt={heroe.superhero}
          />
        </div>
        <div className='col-md-4'>
          <h3>{heroe.superhero}</h3>
          <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego:</b>{heroe.alter_ego}</li>
          <li className='list-group-item'><b>Publisher:</b>{heroe.publisher}</li>
          <li className='list-group-item'><b>First appeareance:</b>{heroe.first_appearance}</li>
          </ul>
          <h5 className='mt-4'>Characters</h5>
          <p>{heroe.characters}</p>
  
          <button className='btn btn-outline-primary' onClick={onReturnToBack}>Back</button>
        </div>
      </div>*/
}
