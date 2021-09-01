import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import{ createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Inicial from './src/views/Inicial/Inicial';
import Colecao from './src/views/Colecao/Colecao';
import Item from './src/views/Item/Item';
import Perfil from './src/views/Perfil/Perfil';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function rotasStack() {

  return(
    <Stack.Navigator initialRouteName="Inicial">

      <Stack.Screen 
      name="Inicial"
      component={Inicial}
      options={
        {cardStyle: styles.screenInicial,
          headerStyle: {backgroundColor: '#14417b'},
          headerTintColor: '#FFFFFF',
        }
      }

      />
      
      <Stack.Screen 
              name="Colecao"
              component={Colecao}
              options={
                {cardStyle: styles.screenItem,
                  headerStyle: {backgroundColor: '#14417b'},
                  headerTintColor: '#FFFFFF',
                }
              }

              />   
        <Stack.Screen 
              name="Item"
              component={Item}
              options={
                {cardStyle: styles.screenItem,
                  headerStyle: {backgroundColor: '#14417b'},
                  headerTintColor: '#FFFFFF',
                }
              }

              />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#081a31" />
      <Tab.Navigator
      tabBarOptions={
        {
          labelStyle: {fontSize: 20},
          style: {backgroundColor: '#14417b'},
          activeTintColor: '#000000'
        }
      }
      >
        <Tab.Screen name="Inicial" component={rotasStack} />
        <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenInicial: {
        backgroundColor: '#92afd7'
  },
  screenColeaco: {
      backgroundColor: '#d1d1d1'
  },
  screenItem: {
    backgroundColor: "#d0f4ea"
  },


});


 
