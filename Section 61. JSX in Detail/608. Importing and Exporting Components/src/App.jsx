import React from 'react';
import LoginForm from "./LoginForm"
import Dog from "./Dog"
import Die from "./Die"
import DiceRoll from "./DiceRoll"

export function App(props) {
  return (
    <div className='App'>
      <DiceRoll/>
      <DiceRoll/>
    </div>
  );
}

// Log to console
console.log('Hello console')