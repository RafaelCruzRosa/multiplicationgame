import React, { useState } from "react"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"

interface NumberPicker{
    quantity: number
    onSelect: (number: number) => void
}

function NumberPicker({quantity, onSelect}: NumberPicker){
    const [numberSelected, setNumberSelected] = useState(0)

    const selectNumber = (number: number) => {
        setNumberSelected(number)
        //onSelect(number)
    }

    const render = () => {
        let numbers = []
        for(let index = 1; index <= quantity; index++){
            numbers.push(
            <TouchableHighlight
                underlayColor="#DDDDDD"
                style={[styles.numberButton, numberSelected == index ? styles.numberSelected : {}]} 
                key={index} 
                onPress={() => selectNumber(index)}
            >
                <Text style={styles.numberText}>{index}</Text>
            </TouchableHighlight>)
        }
        return numbers
    }
    return (
        <View style={styles.container}>
            {render()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    numberButton: {
        flex: 1,
        elevation: 1,
        paddingVertical: 10,
        backgroundColor: '#C5C5C5',
        marginHorizontal: 5,
        borderRadius: 5
    },
    numberText: {
        textAlign: 'center'
    },
    numberSelected: {
        backgroundColor: 'white',
        elevation: 2
    }
})

export default NumberPicker;