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
        <Stack.Screen
        name="Inicial"
        component={Inicial}
        options={
          { CardStyle: styles.screenInicial,
          headerStyle: {backgroundColor: '#14417b'},
          headerTintColor: '#FFFFFF',
          }
        }
        />
           <Stack.Screen
        name="Colecao"
        component={Colecao}
        options={
          { CardStyle: styles.screenColecao,
          headerStyle: {backgroundColor: '#14417b'},
          headerTintColor: '#FFFFFF',
          }
        }
        />

        <Stack.Screen
          name="Item"
          component={Item}
          options={
          { CardStyle: styles.screenItem,
          headerStyle: {backgroundColor: '#14417b'},
          headerTintColor: '#FFFFFF',
         }
       }
       />
      </Stack.Navigator>
      
    </NavigationContainer>
   
  );
  
  }

  const styles = StyleSheet.create({
        screenInicial: {
          backgroundColor: '#000000'
        },
        screenColecao: {
          backgroundColor: '#000000'
        },
        screenItem: {
          backgroundColor: '#000000'
        },
  });




 
