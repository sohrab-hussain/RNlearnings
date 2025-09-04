import {Text, View} from "react-native";
import React from "react";

function MemoItem (props: any) {
    const { title } = props;
    return <View style={{ marginTop:10 }}>
        <Text>{"============ React.memo ============="}</Text>
        <View>
            <Text>{"{props.title}</Text>"}</Text>
        </View>
        <Text>{title}</Text>
    </View>
}

export const MemoItemComponent = React.memo(MemoItem)

//===================
// React.memo
//===================
/*
*   React.memo is a higher-order component (HOC) in React that optimizes functional components by memoizing their rendered output.
*   It prevents unnecessary re-renders of the component when its props have not changed, thus improving performance.
*   React.memo does a shallow comparison of the previous and new props; if the props are the same, it reuses the last rendered
*   result instead of rendering the component again.
*
    How React.memo works:

    1. It wraps a functional component to make it memoized.

    2. When the parent component re-renders, the memoized component only re-renders if its props have changed.

    3. This helps avoid unnecessary rendering of child components on every parent update, especially useful for
       expensive or complex components.

* */