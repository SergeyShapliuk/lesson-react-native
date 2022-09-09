import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import { Provider } from "react-redux";
import {RootStackParamList} from "../../types/types";
import CurrentPokemons from "./screens/CurrentPokemons/CurrentPokemons";
import Pokemons from "./screens/Pokemons/Pokemons";
import { store } from "./store/store";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Lesson_4() {
    return (
        <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={"Pokemons"} component={Pokemons}/>
            <Stack.Screen name={"CurrentPokemons"} component={CurrentPokemons}/>
        </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    );
}




