import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export const RestaurantInfoCard = ({ item }: { item: any }) => {
  console.log('Render RestaurantInfo component');

  // const {
  //   name = 'Some Restaurant',
  //   icon,
  //   photos = [
  //     'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
  //   ],
  //   address = '100 some random street',
  //   isOpenNow = true,
  //   rating = 4,
  //   isClosedTemporarily,
  // } = restaurant;

  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: item.photos[0] }}
      />
      <Text>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // width: '90%',
    // height: 300,
    // flex: 1,
    padding: 20,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000', // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 0.2, // iOS shadow opacity
    shadowRadius: 3, // iOS shadow blur
    elevation: 5, // Android shadow (elevation)
  },
  image: {
    width: '100%',
    height: 200,
    // flex: 1,
  },
});
