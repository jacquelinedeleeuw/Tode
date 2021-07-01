import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from './app/screens/WelcomeScreen'
import Swiper from './app/screens/Swiper'
import Settings from './app/screens/Settings'
import PracticeIndex from './app/screens/PracticeIndex'
import PracticeCard from './app/screens/PracticeCard'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{
            title: 'My home',
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Swiper"
          component={Swiper}
          options={{
            title: 'Tode',
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={() => ({
            title: 'Tode',
            headerShown: true,
            headerBackTitleVisible: false
          })}
        />
        <Stack.Screen
          name="PracticeIndex"
          component={PracticeIndex}
          options={() => ({
            title: 'Practice',
            headerShown: true,
            headerBackTitleVisible: false
          })}
        />
        <Stack.Screen
          name="PracticeCard"
          component={PracticeCard}
          options={() => ({
            title: 'Practice',
            headerShown: false,
            headerBackTitleVisible: false
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
