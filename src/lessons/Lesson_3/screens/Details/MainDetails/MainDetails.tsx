import React from "react";
import {Text, View} from "react-native";
import { MainDetailsPropsType } from "../../../../../types/types";

export function MainDetailsScreen({route}:MainDetailsPropsType) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Main Details Screen</Text>
            <Text>{route.params.id}</Text>
        </View>
    );
}
