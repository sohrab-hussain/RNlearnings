import React, {memo, useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';

const data = [{id: 1, title: "React.memo or memo", description: "React.memo ensures MyListItem only re-renders if its title prop changes."},
    {id: 2, title: "useCallback", description: "useCallback memoizes renderItem and keyExtractor to avoid recreating functions on every render"},
    {id: 3, title: "getItemLayout", description: "getItemLayout provides FlatList with item height and offset, significantly improving scroll performance for fixed-size items"},
    {id: 4, title: "initialNumToRender and maxToRenderPerBatch", description: "initialNumToRender and maxToRenderPerBatch balance initial loading and batch rendering"},
    {id: 5, title: "removeClippedSubviews", description: "unmounts offscreen items to reduce memory usage on large lists"}];

// Memoized list item to prevent unnecessary re-renders
const MyListItem = memo(({ item  }) => {
    return (
        <View style={{  justifyContent: 'center', paddingHorizontal: 10 , marginTop: 10}}>
            <Text style={{fontWeight: "700", fontSize: 20}}>{item.title}</Text>
            <Text style={{}}>{item.description}</Text>
        </View>
    );
}, (prevProps: { item: any; }, nextProps: { item: any; }) => prevProps.item.id === nextProps.item.id);

export function OptimisedFlatListScreen() {

    // Memoized renderItem function
    const renderItem = useCallback(({ item }) => {
        return <MyListItem item={item}  />;
    }, []);

    // Key extractor using unique id
    const keyExtractor = useCallback((item: { id: { toString: () => any; }; }) => item.id.toString(), []);

    // Provide fixed item height and offset for optimization
    // const getItemLayout = useCallback(
    //     (_data: any, index: number) => ({
    //         length: ITEM_HEIGHT,
    //         offset: ITEM_HEIGHT * index,
    //         index,
    //     }),
    //     []
    // );

    return <View style={{flex: 1, marginTop: 10}}>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
           // getItemLayout={getItemLayout}
            initialNumToRender={5}
            maxToRenderPerBatch={10}
            windowSize={10}
            removeClippedSubviews={true}
        />
    </View>
}