import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Display from './src/components/Display';
import Buttons from './src/components/DisplayButtons';

export default function App() {
  return (
    <View style={styles.container}>
      <Display style={styles.displaySize}/>
      <Buttons style={styles.buttonSize}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  displaySize: {
    
  },

  buttonSize: {

  }
});
