import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

//função para o display com a view e o resultado da operação (apenas visual)
function Display() {
  return (
    <View style={styles.display}>
        <Text style={styles.result}>0</Text>
    </View>
  )
}

//Estilos para o Display, foi utilizado para definir tamanhos e cores
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