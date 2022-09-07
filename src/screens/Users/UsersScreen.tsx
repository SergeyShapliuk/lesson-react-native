import React from "react";
import {Button, Text, View} from "react-native";
import { useAppNavigation } from "../../types/types";





export function UsersScreen() {
    const navigation=useAppNavigation()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Users Screen</Text>
            <Button title={"Home Screen"} onPress={()=>{
                navigation.navigate("Home")
            }}/>
        </View>
    );
}



