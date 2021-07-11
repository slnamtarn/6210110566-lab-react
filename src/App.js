import React from 'react';
import './App.css';
import WordCard from './WordCard';
import { Button } from 'reactstrap';


const word = "woranut";
function App() {
 return (
 <div >  
    <Button outline color="success">my name is ... ?</Button>{' '}
    <WordCard value={word}/>
  
 </div>
 );
}
export default App;

