import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Lesson_1 from "./src/lesson/Lesson_1";

export default function App() {


    return (

        <View style={styles.container}>
            <Lesson_1/>
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
