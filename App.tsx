// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
// import TwitterAuthScreen from './TwitterAuthScreen';
import FeedScreen from './screens/FeedScreen';
import DetailScreen from './screens/DetailScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createSharedElementStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ImageFeed">
        {/* <Stack.Screen name="TwitterAuth" component={TwitterAuthScreen} /> */}
        <Stack.Screen name="ImageFeed" component={FeedScreen} />
        <Stack.Screen name="ImageDetail" component={DetailScreen}
          sharedElements={(route, otherRoute, showing)=>{
            const {item} = route.params;
            return [`image-${item.id}`];

          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
