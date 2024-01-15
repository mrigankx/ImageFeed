import React from 'react';
import { View, Text, Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

const DetailScreen = ({ route }) => {
  const { item } = route.params;
  console.log(item);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SharedElement id={`image-${item.id}`}>
        <Image source={{ uri: item.image }} style={{ width: 500, height: 300, borderRadius: 8 }} />
      </SharedElement> 
      <Text style={{fontSize: 30}}>{item.title}</Text>
    </View>
  );
};

// DetailScreen.sharedElements = (route) => {
//   const { item } = route.params;
//   return [
//     {
//       id: `image-${item.id}`,
//       animation: 'move',
//       resize: 'clip'
//     }
//   ];
// };

export default DetailScreen;
