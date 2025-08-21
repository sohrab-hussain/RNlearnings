import {HomeScreen} from "../screens/Home";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createStaticNavigation} from "@react-navigation/native";
import {ProfileScreen} from "../screens/Profile";


const RootStack = createNativeStackNavigator({
    screens: {
        Home: {
            screen: HomeScreen,
            options: {title: 'Welcome'},
        },
        Profile: {
            screen: ProfileScreen,
        },
    },
});

export const Navigation = createStaticNavigation(RootStack);