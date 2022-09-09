import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AsyncThunkFulfilledActionCreator} from "@reduxjs/toolkit/dist/createAsyncThunk";
import {api, Pokemon, PokemonItemType} from "../api/api";

export const getAllPokemon = createAsyncThunk<PokemonItemType[] | undefined, void>(
    "mainReducer/getAllPokemon", async (_, apiThunk) => {
        try {
            const response = await api.getAllPokemon()
            return response.data.results

        } catch (e) {

        }
    }
)
export const getPokemonById = createAsyncThunk<Pokemon | undefined, string>(
    "mainReducer/getPokemonById",async (params)=>{
        try {
            const response = await api.getPokemonById(params)
            return response.data

        } catch (e) {

        }
    }
)
export const clearCurrentPokemon=createAction("getPokemonById/clearCurrentPokemon")
const mainSlice = createSlice({
    name: "mainReducer",
    initialState: {
        allPokemon: [] as PokemonItemType[],
        currentPokemon: {} as Pokemon,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllPokemon.fulfilled, (state, action) => {
            state.allPokemon = action.payload ? action.payload : []
        })
            .addCase(getPokemonById.fulfilled,(state,action)=>{
                state.currentPokemon=action.payload?action.payload:{} as Pokemon
            })
            .addCase(clearCurrentPokemon,(state)=>{
                state.currentPokemon={} as Pokemon
            })
    }
})
export const mainReducer = mainSlice.reducer

