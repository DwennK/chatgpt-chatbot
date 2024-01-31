import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Configuration, OpenAIApi } from 'openai'; // Import these classes



export default function App() {
  const configuration = new Configuration ({
    apiKey : process.env.OPEN_API_KEY,
  });
  
  const openai = new OpenAIApi(configuration);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
