import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { StyleSheet, View, Image, SafeAreaView } from 'react-native'
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
import memes from '../data/memes'

const swiperRef = React.createRef(<Swiper />)

const Break = ({ navigation }) => {
  
  const [jokes, setJokes] = useState([])
  const jokesArray = []

  // Get single jokes
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        'https://v2.jokeapi.dev/joke/Programming?type=single&amount=10'
      )
      handleJokes(data)
    }
    getData()
  }, [])
  // Add single jokes to array
  const handleJokes = (jokes) => {
    jokes.jokes.map((item) => {
      jokesArray.push({
        question: item.joke,
        type: item.type
      })
    })
    memes.map(item => {
      jokesArray.push({
        question: item.question,
        type: item.type
      })
    })
    randomiseJokes()
  }

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        'https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=10'
      )
      handleTwoPartJokes(data)
    }
    getData()
  }, [])

  const handleTwoPartJokes = (jokes) => {
    jokes.jokes.map((item) => {
      jokesArray.push({
        question: item.setup,
        answer: item.delivery,
        type: item.type
      })
    })
    randomiseJokes()
  }

  // Randomise jokes
  const randomiseJokes = () => {
    for (let i = 0; i < Object.keys(jokesArray).length; i++) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = jokesArray[i]
      jokesArray[i] = jokesArray[j]
      jokesArray[j] = temp
    }
    setJokes(jokesArray)
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
  const onSwipedLeft = () => {
    // console.log('left')
  }
  const onSwipedRight = () => {
    // console.log('right')
  }

  if (!jokes) return null
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        ref={swiperRef}
        cards={jokes}
        cardIndex={index}
        renderCard={(card) => {
          if (!card) return null
          return (
            <Cards
              handleBack={handleBack}
              handleLeftSwipe={() => handleLeftSwipe}
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
            navigation: navigation
          })}
        >
          <FontAwesomeIcon icon={faCog} size={24} style={styles.settings} />
        </Button>
      </View>
    </SafeAreaView>
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

export default Break
