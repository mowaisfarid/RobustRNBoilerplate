import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Home = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const RootContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default RootContainer;
