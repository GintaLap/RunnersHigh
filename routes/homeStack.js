import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from './screens/Home';



cosnt screens = {
    Home: {
    screen: Home    
},

}

const HomeStack = createStackNavigator(screens)