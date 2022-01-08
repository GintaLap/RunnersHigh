import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Button} from 'react-native';
import constants from 'expo-constants';


export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <View style={style.container}>
             <Image style={style.logo} source={require('./assets/logo.png')}/>
             <StatusBar style="auto" />
             <View style={style.inputView}>
        <TextInput
          style={style.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
            </View>
           
            <View style={style.inputView}>
        <TextInput
          style={style.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={style.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={style.loginBtn}>
        <Text style={style.loginText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={style.loginText}>OR</Text>
      <TouchableOpacity style={style.loginBtn}>
        <Text style={style.loginText}>Sign Up</Text>
      </TouchableOpacity>
        </View>
    );
}

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