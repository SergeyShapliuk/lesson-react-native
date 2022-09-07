import {
    Dimensions,
    FlatList, ListRenderItem, RefreshControl,
    StyleSheet,
    Text, TextInput, TouchableOpacity,
    View
} from "react-native";
import React, {useState} from "react";
import MemoSvgComponent from "../svg/MySvg";

type TaskType = {
    key: string
    title: string
    isDone: boolean
}

const {height, width} = Dimensions.get("screen")
const HEIGHT = height
const WIDTH = width
const PADDING = 30

const wait = (timeout:any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function Lesson_2() {
    const [task, setTask] = useState<TaskType[]>([
        {
            key: "1",
            title: "HTML",
            isDone: true
        },
        {
            key: "2",
            title: "CSS",
            isDone: false
        },
        {
            key: "3",
            title: "React",
            isDone: true
        }
    ])
    const [title, setTitle] = useState<string>("")
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    const render: ListRenderItem<TaskType> = ({item}) => {
        return <View>
            <TouchableOpacity
                style={[styles.item, {opacity: item.isDone ? 0.8 : 1},{backgroundColor:item.isDone?"green":"tomato"}]}
                onLongPress={() => removeTask(item.key)}
                onPress={() => updateTask(item.key)}>

                <Text
                    style={[styles.title, {textDecorationLine: item.isDone ? "line-through" : "none"}]}>{item.title}</Text>
                <MemoSvgComponent style={{position:"absolute", right:-120}}/>
            </TouchableOpacity>
        </View>
    }
    const addTasks = () => {
        const newTask: TaskType = {
            key: `${title}.${task.length + 1}`,
            title,
            isDone: false
        }
        setTask([newTask, ...task])
        setTitle("")
    };
    const removeTask = (key: string) => {
        setTask(task.filter(el => el.key !== key))
    }
    const updateTask = (key: string) => {
        setTask(task.map(el => el.key === key ? {...el, isDone: !el.isDone} : el))
    }
    // const renderHeader = () => {
    //
    //     return <View style={styles.header}>
    //         <TextInput style={styles.input} value={title} onChangeText={setTitle}/>
    //         <TouchableOpacity onPress={addTasks}>
    //             <Text style={{fontSize: 20, fontWeight: "bold", color: "tomato"}}>
    //                 Add
    //             </Text>
    //         </TouchableOpacity>
    //     </View>
    // }
    return (
        <View style={styles.mainBlock}>
            <View style={styles.header}>
                <TextInput style={styles.input} value={title} onChangeText={setTitle}/>
                <TouchableOpacity onPress={addTasks}>
                    <Text style={{fontSize: 20, fontWeight: "bold", color: "tomato"}}>
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                contentContainerStyle={{}}
                data={task}
                renderItem={render}
                refreshControl={
                    <RefreshControl refreshing={refreshing}
                                    onRefresh={onRefresh}/>
                }
                // ListHeaderComponent={renderHeader}
                ListEmptyComponent={() => {
                    return <View><
                        Text>
                        Empty
                    </Text>
                    </View>
                }}
                ListFooterComponent={() => {
                    return <View>
                        <Text>
                            footer
                        </Text>
                    </View>
                }}/>
        </View>
    )
}

const styles = StyleSheet.create({
        mainBlock: {
            marginTop: 50,
            paddingHorizontal: PADDING,
            // paddingVertical:PADDING/2
            // minHeight: "70%",
            // marginTop: "50%",
            // margin: "7%",
            // display:"flex",
            // justifyContent:"space-evenly"
        },
        header: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 15
        },
        input: {
            width: 200,
            height: 30,
            borderWidth: 1,
            borderRadius: 5
        },
        item: {
            // width: ((WIDTH - (PADDING/2) * 2) / 2) - 5,
            // height: ((WIDTH - (PADDING/2) * 2) / 2) - 5,
            // height: ((WIDTH - PADDING * 2) / 2) - 5,
            // width: ((WIDTH - PADDING * 2) / 2) - 5,
            position:"relative",
            backgroundColor: "tomato",
            paddingHorizontal: 10,
            paddingVertical: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
            borderWidth: 1,
            borderRadius: 5
        },
        title: {
            color: "white",
            fontSize: 22,
            fontWeight: "500"
        }

    })
;
