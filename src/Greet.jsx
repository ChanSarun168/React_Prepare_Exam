import React from 'react'

const Greeting = (props) => {
  return (
    <div>
        <h2>Greeting to React JS!</h2>
        <p>I'm  {props.name}</p> 
        <p>I'm a {props.title}</p>
    </div>
  )
}

export default Greeting
