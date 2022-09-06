import {
    Dimensions,
    FlatList, ListRenderItem,
    StyleSheet,
    Text,
    View
} from "react-native";

type arrType = {
    id: number
    title: string
}

const {height, width} = Dimensions.get("screen")
const HEIGHT = height
const WIDTH = width
const PADDING = 30

export default function Lesson_1() {
    const arrData: arrType[] = new Array(100).fill(null).map((_, index) => ({
        id: index + 1,
        title: `Title ${index}`
    }))
    const render: ListRenderItem<arrType> = ({item}) => {
        return <View style={styles.item}><Text
            style={{color: "white", fontSize: 22, fontWeight: "500"}}>{item.title}</Text></View>
    }


    return (
        <View style={styles.mainBlock}>
            <FlatList
                contentContainerStyle={{}}
                columnWrapperStyle={{justifyContent: "space-between"}}
                numColumns={2}
                data={arrData}
                renderItem={render}
                ListHeaderComponent={() => {
                   return <View><
                        Text>
                        filter
                    </Text>
                   </View>
                }}
                ListEmptyComponent={() => {
                   return <View><
                        Text>
                        Empty
                    </Text>
                   </View>
                }}
                ListFooterComponent={()=>{
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
        item: {
            // width: ((WIDTH - (PADDING/2) * 2) / 2) - 5,
            // height: ((WIDTH - (PADDING/2) * 2) / 2) - 5,
            height: ((WIDTH - PADDING * 2) / 2) - 5,
            width: ((WIDTH - PADDING * 2) / 2) - 5,
            backgroundColor: "tomato",
            marginVertical: 5,
            padding: PADDING / 3

            //     height:40,
            //     padding:10
        }

    })
;
