import React, { useState } from 'react';
import {
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export const RestaurantsScreen = () => {
  console.log('Render RestaurantScreen Component');
  const [textVal, setTextVal] = useState('');

  const onChangeText = (text: string) => {
    console.log('text2:', textVal);
    setTextVal(text);
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            onChangeText={onChangeText}
          />
        </View>
        <FlatList
          data={[0, 1, 2, 3, 4, 5]}
          renderItem={() => <RestaurantInfoCard />}
          keyExtractor={item => item.name}
          contentContainerStyle={{}}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, padding: 20 },
  searchContainer: {
    marginBottom: 16,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000', // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 0.2, // iOS shadow opacity
    shadowRadius: 3, // iOS shadow blur
    elevation: 5, // Android shadow (elevation)
  },
  textInput: [
    {
      // height: 20,
      borderRadius: 5,
      padding: 5,
      margin: 10,
    },
    Platform.OS === 'web' && {
      outlineStyle: 'none', // removes focus outline
      outlineWidth: 0, // ensures no extra border width
      outlineColor: 'transparent', // extra safety for some browsers
    },
  ] as any,
  restaurantListContainer: {
    marginTop: 20,
  },
});
