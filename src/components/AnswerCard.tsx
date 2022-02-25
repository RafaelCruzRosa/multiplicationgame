import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Answer, { AnsweredType, AnswerState } from "../model/Answer";
import Game from "../model/Game";

interface IAnswer {
    answer: Answer
    index: number
    setGame: (newGame: Game) => void
}

export default function AnswerCard({answer, index, setGame}: IAnswer){
    const [number, setNumber] = useState('')

    const submitAnswer = () => {
        let newGame = answer.game.submit(parseInt(number), index)
        setGame(newGame)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.index}>{index + 1}</Text> 
            <Text style={styles.text}>{answer.factor} x {answer.state === AnswerState.WAITING  ? '?' : answer.multiplier}</Text>
            <View>
            <TextInput
                style={[styles.input, answer.state == AnswerState.ANSWERED 
                    ? answer.type == AnsweredType.CORRECT ?  styles.correct : styles.wrong
                    : {}]}
                    onChangeText={(text) => setNumber(text)}
                    value={number}
                    placeholder="_ _"
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.buttonContainer}>
                {answer.state === AnswerState.ANSWERING && (
                    <Button onPress={() => submitAnswer()} title="?" />
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    text: {
        fontSize: 36,
        textAlign: 'center'
    },
    index: {
        borderColor: 'black',
        borderWidth: 1,
        width: 50,
        fontSize: 36,
        textAlign: 'center',
        borderRadius: 50,
    },
    input:{
        fontSize: 36,
        maxHeight: 50,
        padding: 0,
        margin: 0
    },
    correct: {
        color: 'green'
    },
    wrong: {
        color: 'red'
    },
    buttonContainer:{
        height: 50,
        width: 30
    }
})