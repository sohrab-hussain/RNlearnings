

import {useNavigation} from '@react-navigation/native';
import {Button} from "react-native";

export function HomeScreen() {
    const navigation = useNavigation();

    return (
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                {
                    navigation.navigate('Profile', {name: 'Jane'})
                }
            }
        />
    );
}