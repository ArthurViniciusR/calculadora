import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TheButtons = ({title}) => {
  return (
        <TouchableOpacity style={styles.sizeButtons}>
            <Text style={styles.tColor}>
                {title}
            </Text>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    sizeButtons: {
      width: "25%",
      padding: 30,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30
    },

    tColor:{
        color: "white",
        fontSize: 25
    },
  });

export default TheButtons