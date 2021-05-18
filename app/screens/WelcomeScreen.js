import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native'
import { useFonts } from 'expo-font'
import { Button } from 'galio-framework'
import { LinearGradient } from 'expo-linear-gradient'
import Logo from '../assets/logo.png'

// import Swiper from './Swiper'

function WelcomeScreen({ navigation }) {

  const [loaded] = useFonts({
    GothamRoundedBold: require('../assets/fonts/GothamRoundedBold.ttf'),
    GothamRoundedBook: require('../assets/fonts/GothamRoundedBook.ttf')
  })

  if (!loaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#00A0FF', '#80DED0']}
        start={[0,1]}
        end={[1,0]}
        style={styles.background}
      />
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          marginBottom: -350
        }}>
        <Image
          style={styles.tinyLogo}
          source={Logo}
        />
        <Text style={styles.text}>tode</Text>
      </View>
      <Text style={styles.subtext}>Tinder for Coding Tests!</Text>
      <View style={styles.button}>
        <Button 
          color="white"
          round={true}
          borderColor="#ffffff"
          shadowless={true}
          onPress={() =>
            // Alert.prompt('What is your name?', 'enter your name below to get started', text => setName(text))
            navigation.navigate('Swiper')
          }
        >
          <Text style={styles.button}>
            Get Started
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '110%'
  },
  text: {
    // fontFamily: 'GothamRoundedBold',
    fontSize: 50,
    color: 'white',
    fontWeight: '700',
    letterSpacing: -1
  },
  subtext: {
    // fontFamily: 'GothamRoundedBook',
    fontSize: 20,
    color: 'white',
    marginBottom: 40
  },
  button: {
    // fontFamily: 'GothamRoundedBook',
    color: '#00A0FF',
    fontSize: 18
  },
  tinyLogo: {
    height: 50,
    width: 50,
    marginRight: 10
  }
})

export default WelcomeScreen
