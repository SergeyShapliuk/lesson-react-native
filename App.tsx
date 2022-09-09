import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Lessons from './src/Lessons';



export default function App() {
    return (

        <View style={styles.container}>
            <Lessons/>
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
