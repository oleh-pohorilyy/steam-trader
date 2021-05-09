import React from 'react'
import { heroes } from '../../heroes'

const Search: React.FC = () => {

    

    return(
        <>
            {
                heroes.map(h => {
                    return (
                        <>
                            
                            <img src={require(`../../assets/heroes/`+h.img).default} alt={h.name} />
                        </>
                    )
                })
            }
            
        </>
    )
}

export default Search