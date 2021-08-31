import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './src/views/Inicial/Inicial';
import Colecao from './src/views/Colecao/Colecao';
import Item from './src/views/Item/Item';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Inicial" component={Inicial} />
      <Stack.Screen name="Colecao" component={Colecao} />
      <Stack.Screen name="Item" component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
  }
