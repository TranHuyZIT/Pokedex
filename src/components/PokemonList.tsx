import React from 'react'
import { Pokemon } from '../interface'
import PokemonCard from './PokemonCard'

interface Props{
    pokemons: Pokemon[]
}

const PokemonList:React.FC<Props> = (props) => {
    const {pokemons} = props
    return (<div>
        <section className='flex flex-wrap gap-x-4 gap-y-3 justify-center'>
            {pokemons.map((pokemon) => (
                <PokemonCard info={{id: pokemon.id, name:pokemon.name, sprites: pokemon.sprites, types:pokemon.types}}/>
            ))}
        </section>
    </div>)
}
export default PokemonList