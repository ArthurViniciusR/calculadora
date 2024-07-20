import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'


//Função para um botão, que recebe via prop seu valor e seu estilo
//Ele é chamado no display de botões varias vezes
//com seus respectivos valores para formar o display completo
const TheButtons = ({title, style}) => {
  return (
        <TouchableOpacity style={styles.sizeButtons}>
            <Text style={[styles.tColor, style]}>
                {title}
            </Text>
        </TouchableOpacity>
  )
}


//Estilo por botão
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