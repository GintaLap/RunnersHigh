import React from 'react';
import {Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import constants from 'expo-constants';


export default function App() {
  return (
        <View style={style.container}>
        <StatusBar style="auto" />
            <Text style={style.paragraph}>
                Hello world from Group nG03
            </Text>
            <Image style={style.photo} source={require('/photo.jpg')}/>
            <Text style={style.paragraph}>
                Member: <Text style={style.boldText}>Ginta Lapinska</Text>
            </Text>
            <Text style={style.paragraph}>
                This is my Gintas Lapinskas, first React Native application! Nice to see you here.
            </Text>
            
        </View>
  );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        paddingTop: constants.statusBarHeight,
        backgroundColor: '#f2f2f2',
        padding: 10
      ,
    },
    paragraph:{
        margin:30,
        padding:10,
        fontSize:19,
        fontWeight: 'normal',
        textAlign: 'center',
        fontFamily: 'sans-serif-thin',
        color:	 '#333333',

    },
    photo:{
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
    marginLeft:100
    },

    boldText:{
      fontWeight: 'bold',
      fontFamily: 'sans-serif-thin',
      color:	 '#333333',

    }
});
