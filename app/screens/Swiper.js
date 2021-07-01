import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { StyleSheet, View } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Button } from 'galio-framework'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faHeart,
  faTimes,
  faUndoAlt,
  faCog
} from '@fortawesome/free-solid-svg-icons'
import Cards from './Cards'
import flip from '../data/flip'
import * as SecureStore from 'expo-secure-store'

const swiperRef = React.createRef(<Swiper />)
let counter = 0

const SwiperComponent = ({ navigation, route }) => {
  
  const { initialise } = route.params
  const [questions, setQuestions] = useState([])
  const [practice, setPractice] = useState([])
  const questionArray = []

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value)
  }

  // Get boolean questions
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        'https://opentdb.com/api.php?amount=35&category=18&type=boolean'
      )
      handleBoolean(data)
    }
    getData()
  }, [])
  // Add boolean questions to array
  const handleBoolean = (booleanQuestions) => {
    booleanQuestions.results.map((item) => {
      questionArray.push({
        question: item.question,
        correct_answer: item.correct_answer,
        type: item.type
      })
    })
    setQuestions({ ...questions, ...questionArray, ...flip })
  }

  // Get multiple choice questions
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        'https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=multiple'
      )
      handleMultiple(data)
    }
    getData()
  }, [])
  // Add Multiple choice to array
  const handleMultiple = (multipleQuestions) => {
    multipleQuestions.results.map((item) => {
      const answers = [
        item.correct_answer,
        item.incorrect_answers[0],
        item.incorrect_answers[1],
        item.incorrect_answers[2]
      ]
      for (let i = 0; i < answers.length; i++) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = answers[i]
        answers[i] = answers[j]
        answers[j] = temp
      }
      questionArray.push({
        question: item.question,
        correct_answer: item.correct_answer,
        type: item.type,
        answers: answers
      })
    })
    setQuestions({ ...questions, ...questionArray, ...flip })
  }

  // Randomise questions
  const randomiseQuestions = () => {
    for (let i = 0; i < Object.keys(questions).length; i++) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = questions[i]
      questions[i] = questions[j]
      questions[j] = temp
    }
  }

  if (initialise === true) {
    randomiseQuestions()
  }

  const [index, setIndex] = useState(0)
  const onSwiped = () => {
    setIndex(index + 1)
  }

  const handleLeftSwipe = (card) => {
    swiperRef.current.swipeLeft(card)
  }
  const handleRightSwipe = () => {
    swiperRef.current.swipeRight()
  }
  const handleBack = () => {
    swiperRef.current.swipeBack()
  }
  const onSwipedLeft = (card) => {
    const question = JSON.stringify(questions[card])
    const newQuestions = [...practice, question]
    setPractice([...practice, question])
    handlePracticeSave(newQuestions)
  }
  const onSwipedRight = () => {
    counter++
  }

  const handlePracticeSave = (newQuestions) => {
    const newPractice = JSON.stringify(newQuestions)
    save('questions', newPractice)
  }
  
  if (!questions) return null
  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        cards={questions}
        cardIndex={index}
        renderCard={(card) => {
          if (!card) return null
          return (
            <Cards
              handleBack={handleBack}
              handleLeftSwipe={() => handleLeftSwipe(card)}
              handleRightSwipe={handleRightSwipe}
              card={card}
            />
          )
        }}
        backgroundColor="lightgray"
        onSwiped={onSwiped}
        onSwipedLeft={onSwipedLeft}
        onSwipedRight={onSwipedRight}
        swipeBackCard={true}
        disableBottomSwipe
        disableTopSwipe
      />
      <View style={styles.bottomButtons}>
        <Button style={styles.smallButton} onPress={handleBack}>
          <FontAwesomeIcon icon={faUndoAlt} size={24} style={styles.back} />
        </Button>
        <Button style={styles.button} onPress={handleLeftSwipe}>
          <FontAwesomeIcon icon={faTimes} size={32} style={styles.dislike} />
        </Button>
        <Button style={styles.button} onPress={handleRightSwipe}>
          <FontAwesomeIcon icon={faHeart} size={32} style={styles.like} />
        </Button>
        <Button
          style={styles.smallButton}
          onPress={() => navigation.navigate('Settings', {
            practice: practice, 
            counter: counter,
            navigation: navigation
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
    justifyContent: 'flex-end'
  },
  bottomButtons: {
    display: 'flex',
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

export default SwiperComponent
