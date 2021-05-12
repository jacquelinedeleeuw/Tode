/* eslint-disable react/jsx-key */
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Card } from 'galio-framework'

import GothamRoundedBook from '../assets/fonts/GothamRoundedBook.ttf'
import questionArray from '../screens/questionArray'

const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 5,
    marginVertical: 14,
    paddingTop: -20,
    padding: 30
  },
  question: {
    fontFamily: 'GothamRoundedBook',
    fontSize: 30,
    marginBottom: 5 
  },
  answer: {
    fontFamily: 'GothamRoundedBook',
    fontSize: 12
  }
})

// DONT FORGET TO SHUFFLE ARRAY

const questions = []

questionArray.map(item => {
  questions.push(
    <Card style={styles.card}>
      <Text style={styles.question}>{item.question}</Text>
      <Text style={styles.answer}>{item.answer}</Text>
    </Card>
  )
})

export default questions