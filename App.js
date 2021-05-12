import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'
import WelcomeScreen from './app/screens/WelcomeScreen'
import Swiper from './app/screens/Swiper'
import { LinearGradient } from 'expo-linear-gradient'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home" 
          component={WelcomeScreen} 
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#80DED0',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Swiper" 
          component={Swiper} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App