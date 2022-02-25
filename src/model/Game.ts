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
            let randomNumber = Math.floor(Math.random() * 9 + 1)
            answersArray.push(
                new Answer(this, AnswerState.WAITING , factor, randomNumber)
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
            if(index + 1 == answerIndex){
                return this.updateCurrentAnswer(item, factorSubmit)
            }
            else if(index + 1 === answerIndex + 1) {
                return this.updateNextAnswer(item)
            }
            return item
        })

        return new Game(this.quantityQuestions, this._factor, answers)   
    }

    updateCurrentAnswer(item: Answer, factorSubmit: number){
        if(item.factor * item.multiplier == factorSubmit){
            var newType = AnsweredType.CORRECT
        }else {
            var newType = AnsweredType.WRONG
        }
        var newState = AnswerState.ANSWERED
        return new Answer(this, newState, item.factor, item.multiplier, newType)
    }

    updateNextAnswer(item: Answer) {        
        var newState = AnswerState.ANSWERING
        return new Answer(this, newState, item.factor, item.multiplier)
    }
}