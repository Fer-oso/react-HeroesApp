import React from 'react'

import {Link} from 'react-router-dom'

import './styles/Card.css'

export const HeroesCard = ({ heroe }) => {

    return (
        <Link to={`${heroe.id}`} className="my-card">
        <img src={heroe.image} className="img img-responsive" alt={heroe.superhero}/>
        <div className="profile-name">{heroe.superhero}</div>
        <div className="profile-position">{heroe.alter_ego}</div>
        <div className="profile-overview">
            <div className="profile-overview">
                <div className="row">
                    <div className="col-ms-4">
                        <h3>{heroe.publisher}</h3>
                        <p>Primera aparición: <br />{heroe.first_appearance}</p>
                        {
                            (heroe.alter_ego !== heroe.characters)
                            && <p>{heroe.characters}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    </Link>
    )
}
