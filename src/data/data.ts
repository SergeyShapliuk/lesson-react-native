const arrName = ["Sergey", "Vasia", "Petia", "Victor", "Sveta", "Olia", "Sasha", "Alex", "Dima"]

const arrAge = [10, 23, 42, 24, 35, 37, 56, 57, 24]

export type DataType={
    id:number
    name:string
    age:number
}
export const data:DataType[] = new Array(10).fill(null).map((el, index) => ({
    id: index + 1,
    name: arrName[index],
    age: arrAge[index]
}))