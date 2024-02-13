import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPubliser'
import { HeroesCard } from './HeroesCard'
import { getAllHeroes } from '../helpers/getAllHeroes';

export const HeroeList = ({ valueSearch }) => {

    let heroesList = useMemo(()=>getAllHeroes());

    if (valueSearch !== '') {
        heroesList = getHeroesByPublisher(valueSearch)
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
