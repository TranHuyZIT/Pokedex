import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokemonList from './components/PokemonList';
import {Pokemons, Pokemon} from './interface'

const App: React.FC = () => {
  const limitNumber = 20
  const [currentPage, setCurrentPage] = useState <number>(1)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  useEffect(() => {
    const getPokemons = async () =>  {
      const res= await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limitNumber}&offset=${(currentPage - 1)*limitNumber}`)
      res.data.results.forEach(async(pokemon:Pokemons, index:number) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        setPokemons((prev) => ([...prev, {
          ...poke.data,
          types: poke.data.types.map((type:any) => type.type.name)
        }]))
      })
    }
    setPokemons([])
    getPokemons()
  }, [])
  return (
    <div className="App">
      <div className="bg-primary min-w-screen min-h-screen">
          <h1 className='text-center font-heading text-white text-4xl'>Pokemon</h1>
          <PokemonList pokemons={pokemons}/>
      </div>
    </div>
  );
}

export default App;
