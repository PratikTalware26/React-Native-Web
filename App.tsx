import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantsScreen } from './src/features/restaurents/screens/restaurants.screen';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RestaurantsContextProvider } from './src/services/restaurents/mock/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';

function ProfileScreen() {
  // const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      {/* <Button title="Go to home" onPress={() => navigation.navigate('Home')} /> */}
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={RestaurantsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  );
}

export default App;
