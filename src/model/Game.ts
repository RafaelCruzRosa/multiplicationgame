import AnswerCard from "../components/AnswerCard"
import Answer, { AnsweredType, AnswerState } from "./Answer"

export default class Game {
    private _quantityQuestions: number
    private _factor: number
    private _answers?: Array<Answer>

    constructor(quantityQuestions: number, factor: number, answers?: Answer[]){
        this._quantityQuestions = quantityQuestions
        this._factor = factor

        let answersArray = []
        for(let index = 1; index <= quantityQuestions; index++) {
            let answerState = AnswerState.WAITING
            if(index == 1){
                answerState = AnswerState.ANSWERING
            }
            let randomNumber = Math.floor(Math.random() * 9 + 1)
            answersArray.push(
                new Answer(this, answerState , factor, randomNumber)
            )
        }
        this._answers = answers ? answers : answersArray
    }

    get quantityQuestions(){
        return this._quantityQuestions
    }

    set quantityQuestions(quantityQuestions: number) {
        
        this._quantityQuestions = quantityQuestions
    }

    get factor(){
        return this._factor
    }

    set factor(factor: number) {
        this._factor = factor
    }

    get answers(){
        return this._answers
    }

    changeQuantityQuestions(newQuantity: number): Game{
        return new Game(newQuantity, this._factor)
    }

    changeFactor(newFactor: number): Game{
        return new Game(this._quantityQuestions, newFactor)
    }

    submit(factorSubmit: number, answerIndex: number): Game{
        let answers = this._answers?.map((item, index) => {
            if(index === answerIndex) {
                if(factorSubmit == (item.factor * item.multiplier)){
                    item.setCorrect()
                }else{
                    item.setWrong()
                }
            }

            if(index <= answerIndex) {
                item.state = AnswerState.ANSWERED
            }else if(index === answerIndex + 1) {
                item.state = AnswerState.ANSWERING
            }else {
                item.state = AnswerState.WAITING
            }
            
            return item
        })
        return new Game(this.quantityQuestions, this._factor, answers)   
    }
}