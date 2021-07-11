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
            if(state.attempt == 1 ){
                console.log('Hint: ลงท้ายด้วย t')
            }

            if(state.attempt == 2 ){
                console.log('Hint: ตัวที่สองเป็นสระ')
            }

            if(state.attempt == 3 ){
                console.log('Hint: ไม่มีใครอยากชื่อเหมือนฉัน')
            }
            if(state.attempt == 4 ){
                console.log('Hint: ชื่อของฉันมี 2 ความหมาย')
            }
            if(state.attempt == 5 ){
                console.log('Hint: สลับชื่อฉันกลับหลังจะเป็นทูน่าแถว')
            }
            if(state.attempt == 6 ){
                console.log('Hint: ตัวเหี้ย')
            }

            if(guess == state.word){
                console.log('ถูกต้องแล้วนะจ้ะ  my name is woranut')
                setState({...state, completed: true})

            }else{
                console.log('ลองอีกครั้งนะจ้ะ สู้ๆ')
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