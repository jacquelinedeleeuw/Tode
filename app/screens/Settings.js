import React, { useState, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store'
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import { responsiveScreenWidth } from 'react-native-responsive-dimensions'


const Settings = ({ navigation }) => {

  let result
  const [highScore, setHighScore] = useState()
  const [currentScore, setCurrentScore] = useState()
  const [name, setName] = useState('')
  
  async function save(key, value) {
    await SecureStore.setItemAsync(key, value)
  }
  
  useEffect(() => {
    async function getValueFor(key) {
      result = await SecureStore.getItemAsync(key)
      if (key === 'highScore') {
        if (!result) {
          setHighScore('0')
        } else {
          setHighScore(result)
        }
      }
      if (key === 'name') {
        if (!result) {
          setName('stranger')
        } else {
          setName(result)
        }
      }
      if (key === 'currentScore') {
        if (!result) {
          setCurrentScore('0')
        } else {
          setCurrentScore(result)
        }
      }
    }
    getValueFor('name')
    getValueFor('highScore')
    getValueFor('currentScore')
  }, [])
  
  useEffect(() => {
    if (currentScore > highScore) {
      const newHigh = currentScore.toString()
      save('highScore', newHigh)
      setHighScore(currentScore)
    }
  }, [highScore])

  useEffect(() => {
    save('name', name)
  }, [name])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>Hi {name}!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text 
          onPress={() => navigation.navigate('PracticeIndex', {
            initialise: true
          })}
        >
          Click here for your practice questions
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text 
          onPress={() => navigation.navigate('Break', {
            initialise: true
          })}
        >
          Click here if you need a FUN break
        </Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={styles.textHalfContainer}>
          <Text>Highest Score</Text>
          <Text>{highScore}</Text>
        </View>
        <View style={styles.textHalfContainer}>
          <Text>Current Score</Text>
          <Text>{currentScore}</Text>
        </View>
      </View>
      <Text style={styles.subheader}>Personal Settings</Text>
      <View style={styles.textContainer}>
        <Text>Change your name below:</Text>
        <TextInput 
          style={styles.input}
          placeholder='e.g. John Doe'
          onChangeText={(value) => setName(value)}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f7f7f7'
  },
  textContainer: {
    borderWidth: 0,
    backgroundColor: 'white',
    padding: 30,
    marginTop: 15,
    borderRadius: 10,
    width: responsiveScreenWidth(95),
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 0.1
  },
  textHalfContainer: {
    borderWidth: 0,
    backgroundColor: 'white',
    padding: 30,
    margin: 5,
    marginTop: 15,
    borderRadius: 10,
    width: responsiveScreenWidth(46),
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.1
  },
  header: {
    fontSize: 25
  },
  subheader: {
    fontSize: 20,
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 25,
    color: '#9b9b9b'
  },
  text: {
    fontSize: 30,
    letterSpacing: -1
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgray',
    padding: 8,
    margin: 10,
    width: 200
  }
})

export default Settings