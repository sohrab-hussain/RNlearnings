import {useNavigation} from '@react-navigation/native';
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {useCallback} from "react";

const listItems = [{name: "Memoisation", description: "Understanding causes of performance issues such as excessive re-renders, heavy JavaScript thread use, large images, and how to optimize using tools like React.memo, useMemo, useCallback, InteractionManager, FlatList, and profiling with Flipper or React DevTools"},
    {name: "Optimizing FlatList", description: "Optimizing FlatList in React Native involves configuring its props and component design to improve scroll performance, reduce re-renders, and manage memory efficiently, especially for large lists."}];
export function HomeScreen() {
    const navigation = useNavigation();

    const handleOnPress = useCallback((index: number) => {
        switch (index) {
            case 0:
                navigation.navigate("Memoisation");
                break;
            case 1:
                navigation.navigate("OptimisedFlatList");
                break;
            default:
                break;
        }
    }, [navigation]);

    const ListItem = ({ title, desc, index }) => (
        <TouchableOpacity style={{marginTop: 10}} onPress={ () => handleOnPress(index) }>
            <Text style={{fontWeight: "700", fontSize: 20}}>{title}</Text>
            <Text style={{}}>{desc}</Text>
        </TouchableOpacity>
    );

    return <View style={{ padding: 15 }}>
        <FlatList
            data={listItems}
            initialNumToRender={8}
            maxToRenderPerBatch={8}
            windowSize={5}
            renderItem={({ item , index}) => <ListItem desc={item.description} title={item.name} index={ index } />}
        />
    </View>
}