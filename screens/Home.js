import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
// import Login from './screens/Login';
import constants from 'expo-constants';
// import RootStackScreen from './screens/RootStackScreen';

const Home = ({navigation}) => {
    return (
        <View style={style.container}>
          <Image style={style.logo} source={require('../assets/image/logo.png')}/>
          <Text >}>Home Screen</Text>
        <Button
          title="Go to details screen"
          onPress={() => navigation.navigate("Details")}
        />
        </View>
      );
    };

    export default Home;

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        paddingTop: constants.statusBarHeight,
        backgroundColor: '#296460',
        alignItems: "center",
        padding: 8,
    },

    logo:{
        margin:50,
        
    },
    inputView: {
        backgroundColor: "#e6e6e6",
        borderRadius: 20,
        width: "75%",
        height: 45,
        marginBottom: 10,
     
        alignItems: "center",
      },
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        marginTop: Platform.OS === 'ios' ? 0 : -12
      },
     
      forgot_button: {
        height: 30,
        marginBottom: 20,
        color:"white",
        
      },
     
      loginBtn: {
        width: "60%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom:5,
        backgroundColor: "#053630",
      },
      loginText:{
          color:"white",
      }
});