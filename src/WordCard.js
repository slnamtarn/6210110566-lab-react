import React, { useState} from 'react';
import _, { attempt } from 'lodash';
import CharacterCard from "./CharacterCard";

const preparestateFromWolrd = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1, 
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(preparestateFromWolrd(props.value))

    const activateHandler = c => {
        console.log(`${c} has been activated`)

        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, completed: true})
            }else{
                console.log('reset, next attempt')
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }
    }
    return(
        <div>
        { 
            state.chars.map((c, i) =>
                <CharacterCard value={c} key={i} activateHandler={activateHandler} attempt={state.attempt}/>)  
        }
        </div>
    )
}