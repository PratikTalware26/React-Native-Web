import React, { useContext } from 'react';
import {
  // Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { RestaurantsContext } from '../../../services/restaurents/mock/restaurants.context';
import { SearchComponent } from '../components/search.component';
// import { useNavigation } from '@react-navigation/native';

export const RestaurantsScreen = () => {
  console.log('Render RestaurantScreen Component');
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  // const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        {isLoading && (
          <View>
            <Text style={{ fontSize: 50 }}>Loading...</Text>
          </View>
        )}
        <SearchComponent />
        <FlatList
          data={restaurants}
          // renderItem={() => <RestaurantInfoCard />}
          renderItem={RestaurantInfoCard}
          keyExtractor={item => item.name}
          contentContainerStyle={{}}
        />
        {/* <Button
          title="Go to profile"
          onPress={() => navigation.navigate('Profile')}
        /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, padding: 20 },
  restaurantListContainer: {
    marginTop: 20,
  },
});
