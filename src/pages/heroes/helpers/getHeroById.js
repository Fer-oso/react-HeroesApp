import { heroes } from "../../../data/heroes"

export const getHeroById = (id) => {
    
    const heroeFindById = heroes.find( heroe => (heroe.id === id));
  
    return heroeFindById;
}
