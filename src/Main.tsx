import React from "react";
import {View,StyleSheet} from "react-native";
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RootStackParamList } from "./types/types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "./lessons/Lesson_3/screens/Home/HomeScreen";
import { DetailsScreen } from "./lessons/Lesson_3/screens/Details/DetailsScreen";
import { UsersScreen } from "./lessons/Lesson_3/screens/Users/UsersScreen";


// const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();
// const Drawer = createDrawerNavigator<RootStackParamList>();

export default function Main() {
    return (
        // <NavigationContainer>
        //     <View style={styles.container}>
        //         <Stack.Navigator>
        //             <Stack.Screen name="Home" component={HomeScreen}/>
        //             <Stack.Screen name="Details" component={DetailsScreen}/>
        //             <Stack.Screen name="Users" component={UsersScreen}/>
        //         </Stack.Navigator>
        //     </View>
        // </NavigationContainer>
        <NavigationContainer>
            <View style={styles.container}>
                <Tab.Navigator screenOptions={{headerShown:false}}>
                    <Tab.Screen name="Home" component={HomeScreen}/>
                    <Tab.Screen name="Details" component={DetailsScreen}/>
                    <Tab.Screen name="Users" component={UsersScreen}/>
                </Tab.Navigator>
            </View>
        </NavigationContainer>
    // <NavigationContainer>
    //         <View style={styles.container}>
    //             <Drawer.Navigator>
    //                 <Drawer.Screen name="Home" component={HomeScreen}/>
    //                 <Drawer.Screen name="Details" component={DetailsScreen}/>
    //                 <Drawer.Screen name="Users" component={UsersScreen}/>
    //             </Drawer.Navigator>
    //         </View>
    //     </NavigationContainer>
    )
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            // justifyContent: "center",
            // alignItems: "center"

        },


    })
;
