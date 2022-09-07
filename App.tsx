import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Lesson_3  from './src/lessons/Lesson_3';
import Main from './src/Main';


export default function App() {
    return (

        <View style={styles.container}>
            <Lesson_3/>
            <StatusBar style="auto"/>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        // height:"100%",
        // width: "80%",

    },
});
