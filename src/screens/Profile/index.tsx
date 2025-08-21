import {Text} from "react-native";

export
function ProfileScreen({route}) {
    return <Text>This is {route.params.name}'s profile</Text>;
}