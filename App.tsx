/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 50, color: '#fff'}}>Hello World</Text>
    </View>
  )
}

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
