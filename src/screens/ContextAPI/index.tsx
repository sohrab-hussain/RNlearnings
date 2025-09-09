import {Button, Text, View} from "react-native";
import {useCounter} from "./CounterContext.tsx";
import {useNavigation} from "@react-navigation/native";

export function ContextAPIScreen({route}) {
    const { count, setCount } = useCounter();
    const navigation = useNavigation();
    return <View style={{padding: 15}}>
        <Text>{"React's Context API offers an easy, built-in way to manage global or shared state in React Native " +
        "apps that is ideal for simpler or medium complexity scenarios"}</Text>

        <Text style={{textAlign: "center", marginTop: 20}}>Count: {count}</Text>
        <Button onPress={() => {
            setCount(count + 1)
        }} title="Increment" />
        <Button onPress={() => {
            setCount(count - 1)
        }} title="Decrement" />
        <View style={{marginTop: 20}}/>
        <Button onPress={() => {
            navigation.navigate("ContextAPIResults");
        }} title="Check Result" />
    </View>;
}