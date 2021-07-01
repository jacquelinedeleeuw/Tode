import React, { useState, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store'
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native'
import { responsiveScreenWidth } from 'react-native-responsive-dimensions'

const PracticeIndex = ({ navigation }) => {

  let result
  let questionsArray
  const [questions, setQuestions] = useState()

  useEffect(() => {
    async function getValueFor(key) {
      result = await SecureStore.getItemAsync(key)
      if (key === 'questions') {
        if (result) {
          setQuestions(result)
        }
      }
    }
    getValueFor('questions')
    setQuestions(result)
  }, [])

  if (!questions) return null
  {questionsArray = JSON.parse(questions)}
  return (
    <SafeAreaView style={styles.container}>
      {questionsArray.length > 0 ?
        <ScrollView>
          <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}> 
            {questionsArray.map((item, index) => {
              item = JSON.parse(item)
              return (
                <View 
                  key={index} 
                  style={styles.box}
                >
                  <Text
                    onPress={() => navigation.navigate('PracticeCard', {
                      question: item,
                      navigation: navigation,
                      questionsArray: questionsArray,
                      setQuestions: setQuestions
                    })}
                  >
                    {item.question}
                  </Text>
                </View>
              )
            })}
          </View>
        </ScrollView>
        :
        <Text>You have finished them all!</Text>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7'
  },
  box: {
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
  }
})

export default PracticeIndex
