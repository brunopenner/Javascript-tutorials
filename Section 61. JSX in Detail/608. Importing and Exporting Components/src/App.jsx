import React from 'react';
import Greeter from './Greeter.js';
import Dog from './Dog.js';
import LoginForm from './LoginForm.js';

export function App(props) {
  return (
    <div className='App'>
      <Greeter/>
      <Dog/>
      <LoginForm/>
    </div>
  );
}

// Log to console
console.log('Hello console')