import React from 'react';
import PersonInfo from './sample';// Importing your PersonInfo component

function Parent() {
  return (
    <div>
      <h1>My App</h1>
      <PersonInfo
        name="John Doe"    // Passing a string prop named 'name'
        age="30jkh"           // Passing a number prop named 'age'
        isStudent={false}  // Passing a boolean prop named 'isStudent'
      />
    </div>
  );
}

export default Parent;
