import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../../Home';
import { About } from '../../About';

import { Navbar } from '../../../componets/components/navbar/Navbar';
import { HeroeCard } from '../components/heroecard/HeroeCard';

export const HeroesRouter = () => {
    return (
        <>
           <Navbar />
            <Routes>
                <Route path="/heroes" element={<Home />} />
                <Route path="/heroes/:id" element={<HeroeCard/>}/>
                <Route path="/about" element={<About />} />
            </Routes>

        </>
    )
}
