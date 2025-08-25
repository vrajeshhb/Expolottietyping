
/**
 * Author Vrajesh , referring the decimation on 
 * //https://airbnb.io/lottie/#/react-native
 * FOR LOTTIE 
 */
//https://airbnb.io/lottie/#/react-native

import {  View, StyleSheet, } from 'react-native';
import LottieView from 'lottie-react-native';
import React from "react";
import {  Card, Text } from 'react-native-paper';


export default function MyEmoji() {
   return (
   <> 
    
  //  
   
   <View style={styles.animationContainer}>
      <Card style={styles.card}>
      <Text style={styles.paragraph}></Text>
      <LottieView
        autoPlay
        loop
        source={require('../assets/typing.json')}
        style={styles.logo}
      />
        </Card>

    </View>
   </>
  );
}
const styles = StyleSheet.create({
  
   animationContainer: {
   
    justifyContent: 'center',
    flex: 1,
    // padding: 24,
    
  },
  card:{ 
    alignItems: 'center',
    borderRadius:50,
  },
  logo: {
    
    height: 150,
    width: 150,
  }, paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
