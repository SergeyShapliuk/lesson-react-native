import React from "react";
import {Button, Text, View} from "react-native";

;
import {DetailsPropsType, useAppNavigation} from "../../types/types";


export function DetailsScreen({route}: DetailsPropsType) {
    const navigation = useAppNavigation()
    const param = route.params
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Button title={"Users Screen"} onPress={() => {
                navigation.navigate("Users")
            }}/>
            {param &&
                <>
                    <Text>{param.id}</Text>
                    <Text>{param.name}</Text>
                    <Text>{param.isDone ? "true" : "false"}</Text>
                </>}
        </View>
    );
}
