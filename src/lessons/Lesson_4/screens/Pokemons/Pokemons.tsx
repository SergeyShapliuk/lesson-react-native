import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions} from "react-native";
import { useAppNavigation } from "../../../../types/types";
import {GAP, PADDING, WIDTH } from "../../../constants/constants";
import {api, PokemonItemType} from "../../api/api";
import { getAllPokemon } from "../../store/mainReducer";
import {useAppDispatch, useAppSelector } from "../../store/store";


export default function Pokemons() {
    const navigation=useAppNavigation()
    const pokemons=useAppSelector(state=>state.mainReducer.allPokemon)
    const dispatch=useAppDispatch()
    // const [pokemons, setPokemons] = useState<PokemonItemType[]>([])
    useEffect(() => {
        dispatch(getAllPokemon())
        // api.getAllPokemon().then((res) => {
        //     setPokemons(res.data.results)
        // })
    }, [])
    return (

        <View style={styles.container}>
            <FlatList data={pokemons}
                      numColumns={2}
                      contentContainerStyle={{paddingHorizontal:PADDING}}
                      columnWrapperStyle={{justifyContent: "space-between"}}
                      renderItem={({item}) => {
                          return <TouchableOpacity style={styles.item} onPress={()=>{
                              navigation.navigate("CurrentPokemons",{url:item.url})
                          }}>
                              <Text style={styles.text}>{item.name.toUpperCase()}</Text>
                          </TouchableOpacity>
                      }}
                      keyExtractor={(item, index) => `${item.name}.${index}`}
            />


            {/*<Text>{JSON.stringify(pokemons,null,2)}</Text>*/}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
    },
    item:{
        width: ((WIDTH - PADDING * 2) / 2) - GAP,
        // height: ((WIDTH - PADDING * 7) / 3) - 15,
        alignItems:"center",
        paddingVertical:10,
        paddingHorizontal:6,
        marginVertical:GAP,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor:"tomato",

    },
    text:{
        // textAlign:"center",
        color:"white",
        fontSize:16,
        fontWeight:"500"
    }
});


