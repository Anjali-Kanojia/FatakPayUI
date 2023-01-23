import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconCard from '../components/IconCard'
import { widthScale } from '../components/Dimensions'
import LoanDetailsCard from '../components/LoanDetailsCard'

const UIScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{flex:1}}>
      <LoanDetailsCard/>
      </View>
      <View style={{flex:1}}>
      <IconCard/>
      </View>
   </View>
  )
}

export default UIScreen

const styles = StyleSheet.create({
  mainContainer:{
    marginHorizontal:widthScale(20),
    flex:1
  }
})