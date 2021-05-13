/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Button } from 'galio-framework'
import FlipCard from 'react-native-flip-card'

const SCREEN_HEIGHT = Dimensions.get('window').height

export default function Cards({ card }) {

  const [optionOne, setOptionOne] = useState('info')
  const [optionTwo, setOptionTwo] = useState('info')
  const [optionThree, setOptionThree] = useState('info')
  const [optionFour, setOptionFour] = useState('info')

  const handleAnswer = (answer, correct, setOption) => {
    if (answer === correct) {
      setOptionOne('info')
      setOptionTwo('info')
      setOptionThree('info')
      setOptionFour('info')
      setOption('success')
    } if (answer !== correct) {
      setOptionOne('info')
      setOptionTwo('info')
      setOptionThree('info')
      setOptionFour('info')
      setOption('red')
    }
  }

  return (
    <View>
      {card.type === 'boolean' &&
      <View style={styles.card}>
        <Text style={styles.question}>{card.question}</Text>
        <Button
          onPress={() => handleAnswer('True', card.correct_answer, setOptionOne)}
          color={optionOne}
        >True</Button>
        <Button
          onPress={() => handleAnswer('False', card.correct_answer, setOptionTwo)}
          color={optionTwo}
        >False</Button>
      </View>
      }
      {card.type === 'multiple' &&
      <View style={styles.card}>
        <Text style={styles.question}>{card.question}</Text>
        <Button
          onPress={() => handleAnswer(card.answers[0], card.correct_answer, setOptionOne)}
          color={optionOne}
        >{card.answers[0]}</Button>
        <Button
          onPress={() => handleAnswer(card.answers[1], card.correct_answer, setOptionTwo)}
          color={optionTwo}
        >{card.answers[1]}</Button>
        <Button
          onPress={() => handleAnswer(card.answers[2], card.correct_answer, setOptionThree)}
          color={optionThree}
        >{card.answers[2]}</Button>
        <Button
          onPress={() => handleAnswer(card.answers[3], card.correct_answer, setOptionFour)}
          color={optionFour}
        >{card.answers[3]}</Button>
      </View>
      }
      {card.type === 'flip' &&
      <FlipCard
        flipHorizontal={true}
        flipVertical={false}
      >
        <View style={styles.card}>
          <Text style={styles.question}>
            {card.question}
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.answer}>
            {card.answer}
          </Text>
        </View>
      </FlipCard>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    backgroundColor: 'white',
    paddingTop: -20,
    padding: 30,
    marginTop: -20,
    margin: 10,
    height: SCREEN_HEIGHT - 220,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  question: {
    fontFamily: 'GothamRoundedBook',
    fontSize: 30
  },
  answer: {
    fontFamily: 'GothamRoundedBook',
    fontSize: 15
  }
})



// questionArray.map(item => {
//   questions.push(
//     <View style={styles.card}>
//       <Text style={styles.question}>{item.question}</Text>
//       <Text style={styles.answer}>{item.answer}</Text>
//     </View>
//   )
// })

// multipleChoice.map(item => {
//   questions.push(
//     <View style={styles.card}>
//       <Text style={styles.question}>{item.question}</Text>
//       <Button>{item.correct_answer}</Button>
//       <Button>{item.incorrect_answers[0]}</Button>
//       <Button>{item.incorrect_answers[1]}</Button>
//       <Button>{item.incorrect_answers[2]}</Button>
//     </View>
//   )
// })

// DONT FORGET TO SHUFFLE ARRAY
