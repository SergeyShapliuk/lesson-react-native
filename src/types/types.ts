import { NavigationProp, useNavigation } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList={
    Home:undefined
    Details: {
        id:number
        name:string
        isDone:boolean
    }
    Users:undefined
}
export type DetailsPropsType=NativeStackScreenProps<RootStackParamList, "Details">

type UseNavigatioType=NavigationProp<RootStackParamList>

export const useAppNavigation=()=>useNavigation<UseNavigatioType>()