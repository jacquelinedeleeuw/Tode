import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from './app/screens/WelcomeScreen'
import Swiper from './app/screens/Swiper'
import Settings from './app/screens/Settings'

const Stack = createStackNavigator()

const  App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home" 
          component={WelcomeScreen} 
          options={{
            title: 'My home',
            headerShown: false
            // headerStyle: {
            //   backgroundColor: '#80DED0',
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
          }}
        />
        <Stack.Screen 
          name="Swiper" 
          component={Swiper}
          options={{
            title: 'Tode',
            headerShown: false
            // headerStyle: {
            //   backgroundColor: '#80DED0',
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
          }}
        />
        <Stack.Screen 
          name="Settings" 
          component={Settings}
          options={{
            title: 'Tode',
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

