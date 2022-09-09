import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {PokemonProps} from '../../../../types/types';
import {HEIGHT, WIDTH } from '../../../constants/constants';
import {api, Pokemon} from '../../api/api';
import {clearCurrentPokemon, getPokemonById } from '../../store/mainReducer';
import { useAppDispatch, useAppSelector } from '../../store/store';


const CurrentPokemons = ({route}: PokemonProps) => {
    const data=useAppSelector(state=>state.mainReducer.currentPokemon)
    const dispatch=useAppDispatch()
    // const [data, setData] = useState<Pokemon>({} as Pokemon)
    useEffect(() => {
        dispatch(getPokemonById(route.params.url))
        return ()=>{
            dispatch(clearCurrentPokemon())
        }
        // api.getPokemonById(route.params.url).then((res) => {
        //     setData(res.data)
        // })
        // return ()=>{
        //     setData({} as Pokemon)
        // }
    }, [])
    if(!Object.keys(data).length){
        return (
            <View>
                <Text>loading...</Text>
            </View>
        )
    }
    return (
        <View>
            <Text>Current Pokemon</Text>

            <Image style={{width:WIDTH, height:HEIGHT/2}}
                   source={{uri: data ? data.sprites.other["official-artwork"].front_default : "N/A"}}/>
            <Text style={{alignSelf:"center", fontSize:30}}>{`${data?.name[0].toUpperCase()}${data?.name.substring(1)}`}</Text>
        </View>
    );
};

export default CurrentPokemons;