import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { fontScale, heightScale, widthScale } from './Dimensions'
interface IconProps{
    source: ImageSourcePropType | undefined
    title:string,

}
const CommonIconComp:FC<IconProps> = ({source,title}) => {
  return (
    <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={source} style={styles.img} />
        </View>
          <Text style={styles.title}>{title}</Text>
          </View>
  )
}

export default CommonIconComp

const styles = StyleSheet.create({
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#f9ecf9',
        padding: heightScale(16),
      },
      img: {
        height: heightScale(24),
        width: widthScale(24)
      },
      container: {
        alignItems: 'center',
        paddingTop:heightScale(28),
        paddingLeft:widthScale(8),
        paddingBottom:widthScale(20),
        
        paddingRight:heightScale(8)
      },
      title: {
        color: 'black',
        fontSize: fontScale(12),
        paddingTop:heightScale(8),
        paddingBottom:heightScale(20),
        fontWeight:'400',
      },
})