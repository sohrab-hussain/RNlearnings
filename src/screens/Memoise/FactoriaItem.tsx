import React, {useMemo, useState} from "react";
import {Button, Text, TextInput, View} from "react-native";

function factorialReduce(n){
    // Handle non-positive integers
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    // Base case: factorial of 0 and 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: call the function with n-1
    return n * factorialReduce(n - 1);
}

export default function FactorialCalculator() {
    const [facNumber, setFacNumber] = useState(5);
    const [inc, setInc] = useState(0);

    // Memoize factorial calculation; only recalculates if 'facNumber' changes
    const factorial = useMemo(() => factorialReduce(facNumber), [facNumber]);

    return <View style={{marginTop:10}}>
        <Text>{"============ useMemo ============="}</Text>
        <Text>{ "Factorial Calculator" }</Text>
        <Text>{ "Factorial = " + factorial }</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
            onChangeText={text => setFacNumber(Number(text))}
            value={facNumber + ""}
            placeholder="Type something..."
        />
        <Button title={"Re-render"} onPress={() => setInc(i => i + 1)}/>
        <Text>{ "Re-Render Count = " + inc }</Text>
    </View>
}

//===================
// useMemo
//===================
/*
* The React useMemo hook is used to memoize expensive computations so they’re only re-evaluated when necessary,
*  based on dependencies. This helps improve performance by avoiding costly recalculations on every render.

    1. The factorialOf function is an expensive recursive calculation.

    2. useMemo caches the result of the factorial calculation and only recalculates it when the number state changes.

    3. Clicking the "Re-render" button changes inc state, causing the component to re-render, but the factorial is not
       recalculated unless number changes.

*
* */