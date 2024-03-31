import React from 'react'
import { StyleSheet, View } from 'react-native';
import TheButtons from './TheButtons';

function DisplayButtons() {
  return (
    <View style={styles.allButtons}>
        <View style={styles.line}>
            <TheButtons title="AC" />
            <TheButtons title="+/-" />
            <TheButtons title="%" />
            <TheButtons title="/" />
        </View>

        <View style={styles.line}>
            <TheButtons title="7" />
            <TheButtons title="8" />
            <TheButtons title="9" />
            <TheButtons title="x" />
        </View>

        <View style={styles.line}>
            <TheButtons title="4" />
            <TheButtons title="5" />
            <TheButtons title="6" />
            <TheButtons title="-" />
        </View>

        <View style={styles.line}>
            <TheButtons title="1" />
            <TheButtons title="2" />
            <TheButtons title="3" />
            <TheButtons title="+" />
        </View>

        <View style={styles.line}>
            <TheButtons title="0" />
            <TheButtons title="." />
            <TheButtons title="=" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    allButtons: {
      width: "100%",
      height: "60%",
      backgroundColor: "blue",
      alignItems: "center",
      justifyContent: "center"
    },

    line: {
        flexDirection: "row"
    },

  });

export default DisplayButtons