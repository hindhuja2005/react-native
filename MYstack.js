import { createStackNavigator } from "@react-navigation/stack";
import { Button ,Text } from "react-native";

const Stack=createStackNavigator();
function HomeScreen({navigation}){
    return (
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
        />
    );
}
function DetailsScreen(){
    return(
        <text>Details screen</text>
    );
}

function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

export default MyStack