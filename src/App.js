import React from 'react';
import './App.css';
import WordCard from './WordCard';
import { Button } from 'reactstrap';


var word = "woranutdangworawith"
var hintword =["w","wo","wor","woran","woranu"];

let hint = "";
if(hintword != "w"){
   hint = "person playing the role lum-yong"
}
else if(hintword == "w"){
   hint = "there are 6 left,The next one is a vowel"
}
else if(hintword == "wo"){
   hint = "there are 5 left,The next one is a consonant  "
}
else if(hintword == "wor"){
   hint = "there are 4 left,The next one is a vowel"
}
else if(hintword == "wora"){
   hint = "there are 4 left,The next one is a consonant "
}
else if(hintword == "woranu"){
   hint = "there are 4 left,The next one is a vowel"
}



function App() {
 return (
 <div >  
    <Button outline color="success">my name is ... ?</Button>{' '}
    <WordCard value={word} />
         <div className="center">
            <p> Hint : My name likes arctress ,reptile </p>
         </div>
         
 </div>
 
 );
}
export default App;

