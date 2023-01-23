import {Dimensions} from 'react-native';
import React, { FC } from 'react'
const standardWidth = 375.0;
const standardHeight = 767.0;  


const screenWidth = Dimensions.get ('window').width;
const screenHeight = Dimensions.get ('window').height; 

export const widthScale = (dimensionWidth: number)=> {
  return dimensionWidth / standardWidth * screenWidth;
}

export const fontScale  =(dimensionWidth: number) =>{
  return dimensionWidth / standardWidth * screenWidth;   
}

export const heightScale =(dimensionHeight: number) =>{
  return dimensionHeight / standardHeight * screenHeight;
}
