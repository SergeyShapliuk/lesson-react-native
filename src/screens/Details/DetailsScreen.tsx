import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {Button, Text, View} from "react-native";
import {DetailsPropsType, NestedStack, useAppNavigation} from "../../types/types";
import { MainScreen } from "./Main/Main";
import { MainDetailsScreen } from "./MainDetails/MainDetails";

const Stack=createNativeStackNavigator<NestedStack>()

export function DetailsScreen({route}: DetailsPropsType) {
    const navigation = useAppNavigation()
    // const param = route.params
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Main"} component={MainScreen}/>
            <Stack.Screen name={"MainDetails"} component={MainDetailsScreen}/>
        </Stack.Navigator>
        // Use without nested
        // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        //     <Text>Details Screen</Text>
        //     <Button title={"Users Screen"} onPress={() => {
        //         navigation.navigate("Users")
        //     }}/>
        //     {/*{param &&*/}
        //     {/*    <>*/}
        //     {/*        <Text>{param.id}</Text>*/}
        //     {/*        <Text>{param.name}</Text>*/}
        //     {/*        <Text>{param.isDone ? "true" : "false"}</Text>*/}
        //     {/*    </>}*/}
        // </View>
    );
}
