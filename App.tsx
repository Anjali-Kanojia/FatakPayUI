import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UIScreen from './src/screens/UIScreen'

const App = () => {
  return (
    <View style={styles.mainContainer}>
    <UIScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:'white',
    flex:1
  }
})