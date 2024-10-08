import React from 'react';
import Greeter from './Greeter.js';
import Dog from './Dog.js';

export function App(props) {
  return (
    <div className='App'>
      <Greeter/>
      <Dog/>
      <Dog/>
      <Dog/>
      <Greeter/>
    </div>
  );
}

// Log to console
console.log('Hello console')