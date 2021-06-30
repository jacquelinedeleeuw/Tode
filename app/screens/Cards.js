/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'galio-framework'
import FlipCard from 'react-native-flip-card'
import {
  responsiveFontSize,
  responsiveScreenWidth,
  responsiveScreenHeight
} from 'react-native-responsive-dimensions'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faHeart,
  faTimes,
  faUndoAlt,
  faCog
} from '@fortawesome/free-solid-svg-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

export default function Cards({ card, handleBack, handleLeftSwipe, handleRightSwipe, navigation, practice, counter }) {
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
      {card.type === 'start' && (
        <View style={styles.card}>
          <Text style={styles.question}>{card.question}</Text>
        </View>
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
      {/* {card.type !== 'flip' && ( */}
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
            counter: counter
          })}
        >
          <FontAwesomeIcon icon={faCog} size={24} style={styles.settings} />
        </Button>
      </View>
      {/* )} */}
    </View>
  )
}

const styles = StyleSheet.create({
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
  cardcontainer: {
    position: 'absolute'
  },
  buttonStyles: {
    display: 'flex',
    margin: 7,
    borderRadius: 20,
    width: responsiveScreenWidth(80),
    height: 50,
    textAlign: 'center',
    justifyContent: 'center'
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
