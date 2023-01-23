import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonIconComp from './CommonIconComp'
import { fontScale, heightScale, widthScale } from './Dimensions'

const IconCard = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Send Money</Text>
      <View style={styles.rowFlex}>
        <CommonIconComp source={require('../assets/scan_qr.jpg')} title='Scan & Pay'/>
        <CommonIconComp source={require('../assets/upi.jpg')} title='To UPI'/>
        <CommonIconComp source={require('../assets/self.jpg')} title='To Self'/>
        <CommonIconComp source={require('../assets/bank.jpg')} title='To Bank A/c'/>
      </View>
    </View>
  )
}

export default IconCard

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ECDDFF',
    marginVertical: heightScale(10),
    paddingHorizontal: widthScale(10),  
    height:heightScale(168) ,
    width:widthScale(335),
   
  },
  text: {
    fontSize: fontScale(16),
    fontWeight: '600',
    color: 'black',
    paddingLeft:widthScale(13),
    paddingTop:heightScale(19)
  },
  rowFlex: {
    flexDirection: 'row',
  },

})
