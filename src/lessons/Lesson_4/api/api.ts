import axios from "axios";

const BASE_URL="https://pokeapi.co/api/v2"

const instance=axios.create({
    baseURL:BASE_URL
})
export type PokemonItemType={
    name:string
    url:string
}
export type Pokemon= {
    id: number
    name: string
    sprites: {
        other: {
            "official-artwork": {
                "front_default": string
            }
        }
    }
}
export const api={
    getAllPokemon(){
        return instance.get<{results:PokemonItemType[]}>("/pokemon")
    },
    getPokemonById(url:string){
        return instance.get<Pokemon>(url.replace(BASE_URL,""))
    }
}