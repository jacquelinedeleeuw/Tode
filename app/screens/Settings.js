import React, { useState, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { responsiveScreenWidth } from 'react-native-responsive-dimensions'


const Settings = (props) => {

  let result
  const [value, setValue] = useState('7')
  const [key, setKey] = useState('highScore')
  
  const currentScore = props.route.params.counter
  
  async function save(key, value) {
    await SecureStore.setItemAsync(key, value)
  }
  
  useEffect(() => {
    async function getValueFor(key) {
      result = await SecureStore.getItemAsync(key)
      if (!result) {
        setValue('0')
      } else {
        setValue(result)
      }
    }
    getValueFor(key)
  }, [])
  
  const saveNewScore = () => {
    save(key, value)
  }
  
  useEffect(() => {
    if (currentScore > value) {
      setValue(currentScore)
      saveNewScore()
    }
  }, [value])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text>Your practice questions</Text>
      </View>
      <View style={styles.textContainer}>
        <Text>SOMETHING ELSE OR WHATEVER</Text>
      </View>
      <Text style={styles.subheader}>Personal Settings</Text>
      <View style={styles.textContainer}>
        <Text>Your name</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={styles.textHalfContainer}>
          <Text>Highest Score</Text>
          <Text>{value}</Text>
        </View>
        <View style={styles.textHalfContainer}>
          <Text>Current Score</Text>
          <Text>{currentScore}</Text>
        </View>
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
  subheader: {
    // fontFamily: 'GothamRoundedBold',
    fontSize: 20,
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 25,
    color: '#9b9b9b'
  },
  text: {
    // fontFamily: 'GothamRoundedBold',
    fontSize: 30,
    letterSpacing: -1
  }
})

export default Settings