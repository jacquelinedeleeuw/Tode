import React from 'react'
import { StyleSheet, View } from 'react-native'
import { DeckSwiper, Block } from 'galio-framework'

import questions from '../data/questions'


function Swiper() {

  if (!questions) return null
  return (
    <View style={styles.container}>
      <Block>
        <DeckSwiper 
          components={questions}
          onSwipeLeft={() => console.log('left')}
        />
      </Block>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%'
  }
})

export default Swiper