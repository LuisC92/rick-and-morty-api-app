import React from 'react'

const CharacterCard = (props) => {
  return (
    <div>
        <img src={props.image} alt={props.name}/>
        <h5>Name: {props.name}</h5>
        <p>Status: {props.status}</p>
    </div>
  )
}

export default CharacterCard