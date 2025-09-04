import React, {useCallback} from "react";
import {Button, Text, View} from "react-native";

type CallBackItemProps = {
    title: string,
    onPress: () => void,
}

const ButtonItem = React.memo(({title, onPress} : CallBackItemProps) => {
    return <Button title={title} onPress={onPress}/>
});
export default function CallBackExample() {

    const [countA, setCountA] = React.useState(0);
    const [countB, setCountB] = React.useState(0);

    const handleIncrementA = useCallback(() => {
        setCountA(countA + 1);
    }, [countA])

    const handleIncrementB = useCallback(() => {
        setCountB(countB + 1);
    }, [ countB])

    return <View style={{marginTop:10}}>
        <Text>{"============ useCallback ============="}</Text>
        <Text> {"Counter A = " + countA} </Text>
        <ButtonItem title={"Counter A"} onPress={ handleIncrementA }/>

        <Text> {"Counter B = " + countB} </Text>
        <ButtonItem title={"Counter B"} onPress={ handleIncrementB }/>
    </View>
}

//===================
// useCallback
//===================
/*
*
* The React useCallback hook is used to memoize a callback function. It returns a memoized version of the function
* that only changes if the dependencies specified in the dependencies array change. This is useful for preventing
* unnecessary re-creations of functions on every render, which helps optimize performance—especially when passing
* callbacks as props to child components that rely on reference equality to avoid re-rendering.
    How useCallback works:
        1. On the initial render, it stores the function.
        2. On subsequent renders, it returns the stored function as long as dependencies have not changed.
        3. When dependencies change, it recreates and returns the new function.
* */