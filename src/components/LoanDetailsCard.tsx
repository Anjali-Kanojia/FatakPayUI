import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontScale, heightScale, widthScale } from './Dimensions'

const LoanDetailsCard = () => {
  return (
    <View style={styles.mainContainer}>
    <ImageBackground resizeMode='stretch' source={require('../assets/vector.jpg')} style={styles.bgImg} >

                <View style={styles.rowFlex}>
                    <View style={{...styles.columnFlex,height:heightScale(53),width:widthScale(127)}}>
                        <Text style={styles.loanText}>Loan EMI</Text>
                        <Text style={styles.amt}> ₹ 7,850</Text>
                    </View>
                    <View style={styles.columnFlex}>
                        <Text style={styles.firstText}>Applied on</Text>
                        <Text style={styles.secondText}>06 Oct 2022</Text>
                    </View>
                </View>
                <View style={styles.rowFlex}>
                    <View style={styles.columnFlex}>
                        <Text style={styles.firstText}>Loan Amount</Text>
                        <Text style={styles.secondText}>₹65,000</Text>
                    </View>
                    <View style={styles.columnFlex}>
                        <Text style={styles.firstText}>Tenure</Text>
                        <Text style={styles.secondText}>9 Months</Text>
                    </View>
                </View>
                <View style={styles.rowFlex}>
                    <View style={styles.columnFlex}>
                        <Text style={styles.firstText}>Total Interest</Text>
                        <Text style={styles.secondText}>₹2,000</Text>
                    </View>
                    <View style={styles.columnFlex}>
                        <Text style={styles.firstText}>Interest Rate</Text>
                        <Text style={styles.secondText}>7%</Text>
                    </View>
                </View>
            
            
                <View style={{...styles.payContainer,}}>
                <Text style={styles.payText}>Pay Now</Text>
            </View>
            <View style={styles.emiContainer}>
            <Text style={styles.emiText}>EMI Schedule</Text>
            </View> 
        </ImageBackground>
    
    </View>
  )
}

export default LoanDetailsCard

const styles = StyleSheet.create({
    bgImg:{
        height: heightScale(345),
        width: widthScale(335),
    },
    mainContainer:{
        paddingTop:heightScale(20),
    },
    loanText: {
        color: '#44226E',
        fontSize: fontScale(15),
        fontWeight: '600',
        paddingTop:heightScale(2),
    },
    rowFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight:widthScale(24),
        paddingLeft:widthScale(30),
    },
    amt: {
        fontWeight: '800',
        fontSize: fontScale(18),
        color: '#0E0E0E'
    },
    columnFlex: {
        flexDirection: 'column',
        height:heightScale(45),
        width:widthScale(118),
        marginTop:heightScale(25),
        paddingTop:heightScale(8),
    },
    firstText: {
        fontSize:fontScale(13),
        color: '#0E0E0E',
        fontWeight:'500'
    },
    secondText:{
        fontSize: fontScale(15),
        color: '#0E0E0E',
        fontWeight:'600'
    },
    payContainer:{
        backgroundColor:'#44226E',
        height:heightScale(33.12),
        width:widthScale(125),
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:heightScale(295.12),
        left:widthScale(194),
        marginBottom:heightScale(10.35),
        marginRight:widthScale(16)
    },
    payText:{
        color:'#FFFFFF',
        fontSize:fontScale(12),
        fontWeight:'700'
    },
    emiContainer:{
        height: heightScale(33.12),
        width: widthScale(125),
        justifyContent:'center',
        alignItems:'center',
       borderRadius:5,
    borderColor:'#7A7A7A',
    borderWidth:1,
    position:'absolute',
    top:heightScale(295.52),
    left:widthScale(23),
    elevation: 7,
    shadowColor: '#000',
    backgroundColor:'white',
    // shadow color for ios
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    },
    emiText:{
        fontWeight:'700',
        fontSize:fontScale(12),
        color:'#7A7A7A'
    }
})