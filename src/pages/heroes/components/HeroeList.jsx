import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPubliser'
import { HeroesCard } from './HeroesCard'
import { getAllHeroes } from '../helpers/getAllHeroes';

export const HeroeList = ({ valueSearch }) => {

    let heroesList;

    if (valueSearch !== '') {

        heroesList = getHeroesByPublisher(valueSearch)

    } else {

        heroesList = getAllHeroes();
    }

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3 mt-4'>
            {heroesList.map(heroe => (
                <HeroesCard key={heroe.id}
                    heroe={heroe} />
            ))}
        </div>
    )
}
