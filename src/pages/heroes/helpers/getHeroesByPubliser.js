import { heroes } from "../../../data/heroes";

export const getHeroesByPublisher = (publisher) =>{

    const heroeslist = heroes;

    if( heroeslist.includes(publisher)) {

        throw new Error(`${publisher} is not a valid publiser`)
    }

    return heroeslist.filter( heroe => heroe.publisher === publisher)
}