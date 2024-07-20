import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Display() {
  return (
    <View style={styles.display}>
        <Text style={styles.result}>00</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  display: {
    backgroundColor: "black",
    width: "100%",
    height: "40%",
    justifyContent: 'flex-end',
    alignItems: "flex-end"
  },

  result:{
    
    color: "white",
    fontSize: 60,
    padding: 30,
  }
});

export default Display