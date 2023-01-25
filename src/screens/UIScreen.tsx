import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconCard from '../components/IconCard';
import {widthScale} from '../components/Dimensions';
import LoanDetailsCard from '../components/LoanDetailsCard';

const UIScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <LoanDetailsCard />
      <IconCard />
    </View>
  );
};

export default UIScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: widthScale(20),
    // flex:1
  },
});
