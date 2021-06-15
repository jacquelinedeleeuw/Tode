import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { StyleSheet, View } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import Cards from './Cards'
import flip from '../data/flip'

const swiperRef = React.createRef(<Swiper />)

const SwiperComponent = ({ navigation, route }) => {
  const { initialise } = route.params

  const questionArray = []
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        'https://opentdb.com/api.php?amount=35&category=18&type=boolean'
      )
      handleBoolean(data)
    }
    getData()
  }, [])

  const handleBoolean = (booleanQuestions) => {
    booleanQuestions.results.map((item) => {
      questionArray.push({
        question: item.question,
        correct_answer: item.correct_answer,
        type: item.type,
      })
    })
    setQuestions({ ...questions, ...questionArray, ...flip })
  }

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        'https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=multiple'
      )
      handleMultiple(data)
    }
    getData()
  }, [])

  const handleMultiple = (multipleQuestions) => {
    multipleQuestions.results.map((item) => {
      const answers = [
        item.correct_answer,
        item.incorrect_answers[0],
        item.incorrect_answers[1],
        item.incorrect_answers[2],
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
        answers: answers,
      })
    })
    setQuestions({ ...questions, ...questionArray, ...flip })
  }

  // useEffect(() => {
  //   for (let i = 0; i < Object.keys(questions).length; i++) {
  //     const j = Math.floor(Math.random() * (i + 1))
  //     const temp = questions[i]
  //     questions[i] = questions[j]
  //     questions[j] = temp
  //   }
  // }, [initialise])

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

  const handleLeftSwipe = () => {
    swiperRef.current.swipeLeft()
  }

  const handleRightSwipe = () => {
    swiperRef.current.swipeRight()
  }

  const handleBack = () => {
    swiperRef.current.swipeBack()
  }

  const onSwipedLeft = () => {
    console.log('swipe left')
  }
  const onSwipedRight = () => {
    console.log('swipe right')
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
              handleLeftSwipe={handleLeftSwipe}
              handleRightSwipe={handleRightSwipe}
              card={card}
              navigation={navigation}
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default SwiperComponent
