import React from "react";
import {Button,Text,View} from "react-native";
import { useAppNavigation } from "../../../../types/types";


export function HomeScreen() {
    const navigation=useAppNavigation()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title={"Details Screen"} onPress={()=>{
                // @ts-ignore
                navigation.navigate("Details",{id:100,name:"Hello",isDone:false})
            }}/>
        </View>
    );
}

