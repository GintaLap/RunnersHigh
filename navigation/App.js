import * as React from 'react';
import  {useState } from 'react';
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen ({ navigation }) {
  const [count, setCount] = useState(0);
  return (
    <View>
   
    <Button style={styles.button}
      title="Go to List view"
      onPress={() => navigation.navigate('List')
      }
    />

    <Button style={styles.button}
    onPress={() => setCount(count + 1)}
    title="Increase value"/>

    <Button style={styles.button}
    onPress={() => setCount(count - 1)}
    title="Decrease value"/>

    <Text>Current count: {count}</Text>

    </View>
  );
}

function ListView ({navigation}) {
  const JohnDoe = [
    {id:"1",
      title: "John Doe 1",},
    {id: "2",
      title: "John Doe 2",},
    {id:"3",
      title: "John Doe 1",},
    {id: "4",
      title: "John Doe 2",}, 
    {id:"5",
      title: "John Doe 1",},
    {id: "6",
      title: "John Doe 2",},
       ];

  const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (

        <View style={styles.container}>
      <FlatList
      data = {JohnDoe}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  button: {
    padding: 5,
    marginBottom: 10,
    height: 40,
  }, 
  container: {
   flex: 1,
   paddingTop: 10
  },
  item: {
    backgroundColor: '#FA8072',
    marginVertical: 8,
    marginHorizontal: 8,
    height: 40,
    padding: 5,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    padding: 2,
    fontWeight: "bold",
  },
});

const Stack = createNativeStackNavigator();

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Screen' }}
        />
        <Stack.Screen 
          name="List" 
          component={ListView} 
          options={{ title: "List View"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

