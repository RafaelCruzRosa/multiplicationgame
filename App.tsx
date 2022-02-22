import React from 'react';
import {SafeAreaView,StyleSheet, Text} from 'react-native';
import NumberPicker from './src/components/NumberPicker';


const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.textWhichNumber}>Quer treinar qual tabuada ?</Text>
      <NumberPicker quantity={5}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textWhichNumber: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    marginVertical: 10
  }
});

export default App;
