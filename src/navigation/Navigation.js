import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeCountry from "../screens/HomeCountry";
import CountryDetailDetails from "../screens/CountryDetailDetails";

const stack=createNativeStackNavigator();

const Navigation=()=>{
    return(
<NavigationContainer>
    <stack.Navigator>
        <stack.Screen 
        name="Where in the world?"
        component={HomeCountry}
        />
        <stack.Screen
        name="Detailed"
        component={CountryDetailDetails}
        />
    </stack.Navigator>
</NavigationContainer>
    );
}

export default Navigation