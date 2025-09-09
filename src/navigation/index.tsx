import {ProfileScreen} from "../screens/Profile";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MemoisationScreen} from "../screens/Memoise";
import {createStackNavigator} from "@react-navigation/stack";
import {HomeScreen} from "../screens/Home";
import {OptimisedFlatListScreen} from "../screens/FlatList";
import {ContextAPIScreen} from "../screens/ContextAPI";
import { ContextAPIResultsScreen} from "../screens/ContextAPI/ResultScreen.tsx";
import {CounterProvider} from "../screens/ContextAPI/CounterContext.tsx";

const Tab = createBottomTabNavigator();

export function ContextAPINavigator() {
    return (
        <CounterProvider>
        <Stack.Navigator>
            <Stack.Screen name="ContextAPI" component={ContextAPIScreen} />
            <Stack.Screen name="ContextAPIResults" component={ContextAPIResultsScreen} />
        </Stack.Navigator>
        </CounterProvider>
    );
}
export function HomeTabs() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}  />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Memoisation" component={MemoisationScreen} />
            <Stack.Screen name="OptimisedFlatList" component={OptimisedFlatListScreen} />
            <Stack.Screen name="ContextAPI" component={ContextAPINavigator} options={{ headerShown: false }}/>
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
