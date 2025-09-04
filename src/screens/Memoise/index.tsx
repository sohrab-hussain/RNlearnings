import {MemoItemComponent} from "./MemoItem.tsx";
import {useNavigation} from "@react-navigation/native";
import {View} from "react-native";
import FactorialCalculator from "./FactoriaItem.tsx";
import CallBackExample from "./CallBackItem.tsx";

export
function MemoisationScreen({route}) {
    const navigation = useNavigation();

    return <View style={{ padding: 15 }}>
        <MemoItemComponent title={"Memoised Compponent..."}/>;
        <View style={{ height: 25 }}/>
        <FactorialCalculator/>
        <View style={{ height: 25 }}/>
        <CallBackExample/>
    </View>

}