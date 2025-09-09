import {Text, View} from "react-native";
import {useCounter} from "./CounterContext.tsx";

export function ContextAPIResultsScreen({route}) {
    const { count } = useCounter();

    return <View style={{padding: 15, textAlign: "center"}}>
        <Text>{"Updated Counter Value = " + count}</Text>
    </View>;
}