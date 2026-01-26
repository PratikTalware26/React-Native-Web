import React, { useContext, useState } from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { LocationContext } from '../../../services/location/location.context';

export const SearchComponent = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Search for location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={text => {
          //   if (!text.length) {
          //     return;
          //   }
          setSearchKeyword(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});
