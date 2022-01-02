import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Hello World from Group nG03!
        Member: Ieva Pētersone
      </Text>
        <Image style={styles.image} source={require('./assets/profile.JPG')}/>
        <Text style={styles.paragraph}>
        This is my first try on creating a React Native application. I am excited to continue!
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#800080',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 150,
    height: 150,
  },
});
