import React, { useEffect, useState } from 'react';
import {SafeAreaView,ScrollView,StyleSheet, Text, View} from 'react-native';
import AnswerCard from './src/components/AnswerCard';
import NumberPicker from './src/components/NumberPicker';
import Game from './src/model/Game';


const App = () => {
  const [game, setGame] = useState<Game>(new Game(0, 0))

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textWhichNumber}>Quer tabuada quer praticar ?</Text>
      <NumberPicker quantity={9} onSelect={(number) => setGame(game.changeFactor(number))}/>
      <Text style={styles.textWhichNumber}>Quantas perguntas ?</Text>
      <NumberPicker quantity={20} step={5} onSelect={(number) => setGame(game.changeQuantityQuestions(number))}/>
      {game.factor !== 0 && game.quantityQuestions !== 0 ? (

      <ScrollView style={styles.scrollContainer}>
        {game.answers?.map((answer, index) => {
          return <AnswerCard key={`${index}-${answer.factor}x${answer.multiplier}`} index={index} answer={answer} setGame={(newGame) => setGame(newGame)}/>
        })}
      </ScrollView>
      ): (<View></View>)}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textWhichNumber: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    marginVertical: 10
  },
  scrollContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#C5C5C5'
  }
});

export default App;
