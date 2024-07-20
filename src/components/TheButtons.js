import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TheButtons = ({title, style}) => {
  return (
        <TouchableOpacity style={styles.sizeButtons}>
            <Text style={[styles.tColor, style]}>
                {title}
            </Text>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    sizeButtons: {
      width: "25%",
      padding: 35,
      alignItems: "center",
      justifyContent: "center",
    },

    tColor:{
        color: "white",
        fontSize: 25
    },
  });

export default TheButtons