import Game from "./Game";

export enum AnswerState {
    ANSWERING,
    ANSWERED,
    WAITING
}

export enum AnsweredType {
    CORRECT,
    WRONG
}

export default class Answer {
    private _game: Game
    private _state: AnswerState
    private _type?: AnsweredType
    private _factor: number
    private _multiplier: number


    constructor(game: Game, state = AnswerState.WAITING, factor: number, multiplier: number, type?: AnsweredType){
        this._game = game
        this._state = state
        this._factor = factor
        this._multiplier = multiplier
        this._type = type
    }

    get factor(){
        return this._factor
    }

    get multiplier(){
        return this._multiplier
    }

    get state(){
        return this._state
    }
    get type(){
        return this._type
    }
    get game(){
        return this._game
    }
}