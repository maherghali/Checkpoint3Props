import React from 'react';


function Title(props) {

  
  return (
  <h1 style={props.style}>
  {props.children}
  </h1>
)
}

export default Title;