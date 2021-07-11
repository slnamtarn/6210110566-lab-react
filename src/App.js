import React from 'react';
import './App.css';
import WordCard from './WordCard';
import { Button } from 'reactstrap';


var word = "woranutdangworawith"
//const word = "woranut";
function App() {
 return (
 <div >  
    <Button outline color="success">my name is ... ?</Button>{' '}
    <WordCard value={word} />
</div>
  
   //const activationHandler = (c) => {
   //if (c) {
  //alert("you guessed the correct word !")
 // window.location.reload();
 );
}
export default App;

