import * as React from 'react';
import {Text, View, StyleSheet, Image } from 'react-native';
import constants from 'expo-constants';

export default function App() {
    return(
        <View style={styles.container}>
            <Text style={style.paragraph}>
                Hello world from Group nG03
            </Text>
            <Text style={style.paragraph}>
                Member: Ginta Lapinska
            </Text>
            <Text style={style.paragraph}>
                This is my Ginta Lapinska, first React Native application! Nice to see you here.
            </Text>
            <image style={styles.logo} source={require('.assets/photo.jpg')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph:{
        margin:24,
        fontSize:18,
        fontWeight: 'regular',
        textAlign: 'center',

    },
});