import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import FlipCard from 'react-native-flip-card'
import {
  responsiveFontSize,
  responsiveScreenWidth,
  responsiveScreenHeight
} from 'react-native-responsive-dimensions'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

export default function Cards({ card, handleLeftSwipe, handleRightSwipe }) {
  if (card.question.includes('&quot;')) {
    card.question = card.question.replaceAll('&quot;', '')
  }

  if (card.question.includes('&#039;')) {
    card.question = card.question.replaceAll('&#039;', '')
  }

  if (card.type === 'multiple') {
    card.answers.forEach((item, index) => {
      if (item.includes('&quot;')) {
        card.answers[index] = item.replaceAll('&quot;', '')
      }
      if (item.includes('&#039;')) {
        card.answers[index] = item.replaceAll('&#039;', '')
      }
    })
  }

  const [optionOne, setOptionOne] = useState(['#00A0FF', '#80DED0'])
  const [optionTwo, setOptionTwo] = useState(['#00A0FF', '#80DED0'])
  const [optionThree, setOptionThree] = useState(['#00A0FF', '#80DED0'])
  const [optionFour, setOptionFour] = useState(['#00A0FF', '#80DED0'])

  const handleAnswer = (answer, correct, setOption) => {
    if (answer === correct) {
      setOptionOne(['#00A0FF', '#80DED0'])
      setOptionTwo(['#00A0FF', '#80DED0'])
      setOptionThree(['#00A0FF', '#80DED0'])
      setOptionFour(['#00A0FF', '#80DED0'])
      setOption(['#4ca783', '#63dc99'])
      setTimeout(() => {
        handleRightSwipe()
      }, 1000)
    }
    if (answer !== correct) {
      setOptionOne(['#00A0FF', '#80DED0'])
      setOptionTwo(['#00A0FF', '#80DED0'])
      setOptionThree(['#00A0FF', '#80DED0'])
      setOptionFour(['#00A0FF', '#80DED0'])
      setOption(['#e94a6e', '#f77948'])
      setTimeout(() => {
        handleLeftSwipe(card)
      }, 1000)
    }
  }

  return (
    <View style={styles.cardcontainer}>
      {card.type === 'meme' && (
        <View style={styles.card}>
          <View>
            <Image 
              style={styles.image} 
              source={{ 
                uri: card.question
              }} />
          </View>
        </View>
      )}
      {card.type === 'single' && (
        <View style={styles.card}>
          <Text style={styles.question}>{card.question}</Text>
        </View>
      )}
      {card.type === 'twopart' && (
        <FlipCard flipHorizontal={true} flipVertical={false}>
          <View style={styles.card}>
            <Text style={styles.question}>{card.question}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.flipAnswer}>{card.answer}</Text>
          </View>
        </FlipCard>
      )}
      {card.type === 'boolean' && (
        <View style={styles.card}>
          <Text style={styles.question}>{card.question}</Text>
          <TouchableOpacity
            onPress={() =>
              handleAnswer('True', card.correct_answer, setOptionOne)
            }
          >
            <LinearGradient
              colors={optionOne}
              start={[0, 1]}
              end={[1, 0]}
              style={styles.buttonStyles}
            >
              <Text style={styles.answer}>True</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              handleAnswer('False', card.correct_answer, setOptionTwo)
            }
          >
            <LinearGradient
              colors={optionTwo}
              start={[0, 1]}
              end={[1, 0]}
              style={styles.buttonStyles}
            >
              <Text style={styles.answer}>False</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      )}
      {card.type === 'multiple' && (
        <View style={styles.card}>
          <Text style={styles.question}>{card.question}</Text>
          <TouchableOpacity
            onPress={() =>
              handleAnswer(card.answers[0], card.correct_answer, setOptionOne)
            }
          >
            <LinearGradient
              colors={optionOne}
              start={[0, 1]}
              end={[1, 0]}
              style={styles.buttonStyles}
            >
              <Text style={styles.answer}>{card.answers[0]}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              handleAnswer(card.answers[1], card.correct_answer, setOptionTwo)
            }
          >
            <LinearGradient
              colors={optionTwo}
              start={[0, 1]}
              end={[1, 0]}
              style={styles.buttonStyles}
            >
              <Text style={styles.answer}>{card.answers[1]}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              handleAnswer(card.answers[2], card.correct_answer, setOptionThree)
            }
          >
            <LinearGradient
              colors={optionThree}
              start={[0, 1]}
              end={[1, 0]}
              style={styles.buttonStyles}
            >
              <Text style={styles.answer}>{card.answers[2]}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              handleAnswer(card.answers[3], card.correct_answer, setOptionFour)
            }
          >
            <LinearGradient
              colors={optionFour}
              start={[0, 1]}
              end={[1, 0]}
              style={styles.buttonStyles}
            >
              <Text style={styles.answer}>{card.answers[3]}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      )}
      {card.type === 'flip' && (
        <FlipCard flipHorizontal={true} flipVertical={false}>
          <View style={styles.card}>
            <Text style={styles.question}>{card.question}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.flipAnswer}>{card.answer}</Text>
          </View>
        </FlipCard>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  cardcontainer: {
    position: 'absolute'
  },
  card: {
    borderWidth: 0,
    backgroundColor: 'white',
    padding: 30,
    height: responsiveScreenHeight(85),
    width: responsiveScreenWidth(90),
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: responsiveScreenHeight(50),
    width: responsiveScreenWidth(90),
    resizeMode: 'contain'
  },
  question: {
    fontFamily: 'GothamRoundedBook',
    fontSize: responsiveFontSize(2.5),
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 30
  },
  answer: {
    fontFamily: 'GothamRoundedBook',
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    color: 'white'
  },
  flipAnswer: {
    fontFamily: 'GothamRoundedBook',
    fontSize: responsiveFontSize(2.5),
    textAlign: 'center',
    color: 'black'
  },
  buttonStyles: {
    display: 'flex',
    margin: 7,
    borderRadius: 20,
    width: responsiveScreenWidth(80),
    height: 50,
    textAlign: 'center',
    justifyContent: 'center'
  }
})
