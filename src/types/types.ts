import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import {CompositeScreenProps, NavigationProp, NavigatorScreenParams, useNavigation } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"

// Example navigation
// export type RootStackParamList={
//     Home:undefined
//     Details: {
//         id:number
//         name:string
//         isDone:boolean
//     }
//     Users:undefined
// }

// example nested navigation
export type RootStackParamList={
    Home:undefined
    Details: NavigatorScreenParams<NestedStack>
    Users:undefined
    Pokemons:undefined
    CurrentPokemons:{
        url:string
    }
}
export type NestedStack={
    Main:undefined
    MainDetails: {
      id:number
    }
}

export type PokemonProps=NativeStackScreenProps<RootStackParamList, "CurrentPokemons">
    
export type MainDetailsPropsType=CompositeScreenProps<BottomTabScreenProps<NestedStack, "MainDetails">,
    StackScreenProps<RootStackParamList>>
export type DetailsPropsType=NativeStackScreenProps<RootStackParamList, "Details">

export type UseNavigatioType=NavigationProp<RootStackParamList>

export const useAppNavigation=()=>useNavigation<UseNavigatioType>()