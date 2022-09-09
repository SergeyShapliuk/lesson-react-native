import React from "react";
import {FlatList, ListRenderItem, Text, TouchableOpacity, View} from "react-native";
import {data, DataType} from "../../../../../data/data";
import { useAppNavigation } from "../../../../../types/types";


export function MainScreen() {
    const navigation=useAppNavigation()
    const render: ListRenderItem<DataType> = ({item}) => {
        return <View>
            <TouchableOpacity onPress={()=>{
            navigation.navigate("Details",{screen:"MainDetails",params:{id:item.id}})}
            }>
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
            </TouchableOpacity>
        </View>
    }
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FlatList data={data}
                      renderItem={render}
                      keyExtractor={(item) => item.id.toString()}>

            </FlatList>
        </View>
    );
}
