import { StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <View id="AppContainer" style={styles.container}>
      <Text style={{color: "black", fontSize: 50}}>Hello World</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
