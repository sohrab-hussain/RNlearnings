import React, {createContext, useContext} from "react";

interface ICounterProps {
    count: number;
    setCount: (p0: number) => void;
}
// 1. Create the context with default values
const CounterContext = createContext({} as ICounterProps);


// 2. Create the provider component
// @ts-ignore
export const CounterProvider = ({children}) => {
    const [count, setCount] = React.useState(0);
    return (
        <CounterContext.Provider value={{count, setCount}}>
            {children}
        </CounterContext.Provider>
    )
}
export const useCounter = () => useContext(CounterContext);

/*
* Explanation:

    CounterContext holds the shared state.

    CounterProvider uses useState internally and wraps the component tree.

    useCounter custom hook makes consumption clean in any child.

* */