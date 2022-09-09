import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View, StyleSheet} from "react-native";
import Lesson_1 from "./lessons/Lesson_1/Lesson_1";
import Lesson_2 from "./lessons/Lesson_2/Lesson_2";
import Lesson_3 from "./lessons/Lesson_3/Lesson_3";
import Lesson_4 from "./lessons/Lesson_4/Lesson_4";


export default function Lessons() {
    return (

        <View style={styles.container}>

                {/*<Lesson_1/>*/}
                {/*<Lesson_2/>*/}
                {/*<Lesson_3/>*/}
                <Lesson_4/>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
    },
});
