import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image } from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?q=tesla&from=2021-12-03&sortBy=publishedAt&apiKey='
    )
      .then((response) => response.json())
      .then((json) => setData(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#ccc', padding: 10 }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          margin: 10,
          padding: 14,
          textAlign: 'center',
        }}>
        Home
      </Text>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={'#0000ff'} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View
              style={{ marginTop: 5, backgroundColor: '#fff', padding: 14 }}>
                  <Image style={{margin:20}} source={{uri:item.urlToImage}} />
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                {item.title}, {item.name}
              </Text>
              <Text>{item.description}</Text>
              <Text>{item.content}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default App;
