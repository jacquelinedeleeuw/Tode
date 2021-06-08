import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { responsiveScreenWidth } from 'react-native-responsive-dimensions'

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text>Settings content</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={styles.textHalfContainer}>
          <Text>More Settings content</Text>
        </View>
        <View style={styles.textHalfContainer}>
          <Text>Even more Settings content</Text>
        </View>
      </View>
      <Text style={styles.subheader}>Personal Settings</Text>
      <View style={styles.textContainer}>
        <Text>Maybe a settings slider like Tinder?</Text>
      </View>
      <View style={styles.textContainer}>
        <Text>Settings content</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f7f7f7'
  },
  textContainer: {
    borderWidth: 0,
    backgroundColor: 'white',
    padding: 30,
    marginTop: 15,
    borderRadius: 10,
    width: responsiveScreenWidth(95),
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 0.1
  },
  textHalfContainer: {
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
  },
  subheader: {
    // fontFamily: 'GothamRoundedBold',
    fontSize: 20,
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 25,
    color: '#9b9b9b'
  },
  text: {
    // fontFamily: 'GothamRoundedBold',
    fontSize: 30,
    letterSpacing: -1
  }
})

export default Settings