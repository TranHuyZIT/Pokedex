import React from 'react'
import { Pokemon } from '../interface'

interface Props{
    info: {
        id: number,
        name:string,
        types: string[],
        sprites: {
            front_default: string
        }
    }
}

const PokemonCard:React.FC<Props> = (props) => {
    const {info} = props
    return (
        <div className='w-1/8 mt-4 flex flex-col items-center justify-center bg-white rounded-lg hover:scale-105 transition-transform ease-in-out cursor-pointer'>
            <div>
                <img src={info.sprites.front_default} alt="error" />
            </div>
            <div className='font-heading'>{info.name}</div>
        </div>)
}
export default PokemonCard