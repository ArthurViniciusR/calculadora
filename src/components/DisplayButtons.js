import React from 'react'
import { StyleSheet, View } from 'react-native';
import TheButtons from './TheButtons';

function DisplayButtons() {
  return (
    <View style={styles.allButtons}>
        <View style={styles.line}>
            <TheButtons title="7" />
            <TheButtons title="8" />
            <TheButtons title="9" />
            <TheButtons style={styles.operation} title="/" />
        </View>

        <View style={styles.line}>
            <TheButtons title="4" />
            <TheButtons title="5" />
            <TheButtons title="6" />
            <TheButtons style={styles.operation} title="x" />
        </View>

        <View style={styles.line}>
            <TheButtons title="1" />
            <TheButtons title="2" />
            <TheButtons title="3" />
            <TheButtons style={styles.operation} title="-" />
        </View>

        <View style={styles.line}>
            <TheButtons style={styles.operation} title="C" />
            <TheButtons title="0" />
            <TheButtons style={styles.operation} title="=" />
            <TheButtons style={styles.operation} title="+" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    allButtons: {
      width: "100%",
      height: "60%",
      backgroundColor: "#062529",
      alignItems: "center",
      justifyContent: "center",
    },

    line: {
        flexDirection: "row"
    },

    operation: {
      color: "#5b797e"
    }


  });

export default DisplayButtons