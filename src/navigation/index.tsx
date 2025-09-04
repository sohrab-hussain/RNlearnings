import {ProfileScreen} from "../screens/Profile";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MemoisationScreen} from "../screens/Memoise";
import {createStackNavigator} from "@react-navigation/stack";
import {HomeScreen} from "../screens/Home";
import {OptimisedFlatListScreen} from "../screens/FlatList";

const Tab = createBottomTabNavigator();

export function HomeTabs() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}  />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Memoisation" component={MemoisationScreen} />
            <Stack.Screen name="OptimisedFlatList" component={OptimisedFlatListScreen} />
        </Stack.Navigator>
    );
}
const Stack = createStackNavigator();

export function AppNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeTabs} options={{ headerShown: false }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>

    );
}
