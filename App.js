import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from './app/screens/WelcomeScreen'
import Swiper from './app/screens/Swiper'
import Settings from './app/screens/Settings'
import { Button } from 'react-native'

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
          options={({ navigation }) => ({
            title: 'Tode',
            headerShown: true,
            headerBackTitleVisible: false,
            // eslint-disable-next-line react/display-name
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Swiper')}
                title='Done'
                color='#00A0FF'
              />
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

