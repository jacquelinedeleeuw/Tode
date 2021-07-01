import React from 'react'
import { StyleSheet, View } from 'react-native'
import Cards from './Cards'
import { Button } from 'galio-framework'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faHeart,
  faTimes,
  faUndoAlt,
  faCog
} from '@fortawesome/free-solid-svg-icons'
import * as SecureStore from 'expo-secure-store'

const PracticeCard = (props) => {

  const question = props.route.params.question
  let questionsArray = props.route.params.questionsArray
  const navigation = props.route.params.navigation
  const setQuestions = props.route.params.setQuestions

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value)
  }

  const handleRightSwipe = () => {
    questionsArray.map((item, index) => {
      item = JSON.parse(item)
      if (item.question === question.question) {
        questionsArray.splice(index, 1)
      }
      item = JSON.stringify(item)
    })
    questionsArray = JSON.stringify(questionsArray)
    setQuestions(questionsArray)
    save('questions', questionsArray)
    navigation.navigate('PracticeIndex')
  }

  const handleLeftSwipe = () => {
    navigation.navigate('PracticeIndex')
  }

  if (!question) return null
  return (
    <View style={styles.container}>
      <View
        alignItems="center"
        justifyContent="flex-end"
      >
        <Cards
          handleRightSwipe={() => handleRightSwipe(question)}
          handleLeftSwipe={() => handleLeftSwipe()}
          card={question}
          navigation={navigation}
        />
      </View>
      <View style={styles.bottomButtons}>
        <Button 
          style={styles.smallButton}
          onPress={() => navigation.navigate('PracticeIndex')}
        >
          <FontAwesomeIcon icon={faUndoAlt} size={24} style={styles.back} />
        </Button>
        <Button
          style={styles.button} 
          onPress={() => navigation.navigate('PracticeIndex')}
        >
          <FontAwesomeIcon icon={faTimes} size={32} style={styles.dislike} />
        </Button>
        <Button style={styles.button} onPress={handleRightSwipe}>
          <FontAwesomeIcon icon={faHeart} size={32} style={styles.like} />
        </Button>
        <Button
          style={styles.smallButton}
          onPress={() => navigation.navigate('Settings', {
          })}
        >
          <FontAwesomeIcon icon={faCog} size={24} style={styles.settings} />
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'lightgray'
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -60
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 100,
    borderColor: '#e7e8e8',
    borderWidth: 7,
    shadowColor: 'white',
    width: 80,
    height: 80,
    margin: 5
  },
  smallButton: {
    backgroundColor: 'white',
    borderRadius: 100,
    borderColor: '#e7e8e8',
    borderWidth: 7,
    shadowColor: 'white',
    width: 50,
    height: 50,
    margin: 3
  },
  like: {
    color: '#4dcd94'
  },
  dislike: {
    color: '#fb6d69'
  },
  back: {
    color: '#fae298'
  },
  settings: {
    color: '#25b6cb'
  }
})

export default PracticeCard
