import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UIScreen from './src/screens/UIScreen'

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
    <UIScreen/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:'white',
    // flex:1
  }
})