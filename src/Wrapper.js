import React from 'react';
import Photo from './Photo';
import Title from './Title';

function Wrapper() {

  
  return (
<div style={{ border: 'solid 1px black'}}>
<Photo src="/profile.png" />
        <Title style={{
          color: 'red'
        }}>My Name here</Title>

        <Title small>My job here</Title>
</div>
)
}

export default Wrapper;