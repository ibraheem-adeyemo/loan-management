import React from 'react';

const Button = (props) => {
  const width = props.width || 100;
  const style = {
    backgroundColor: props.color,
    color: props.textColor || 'white',
    width,
    height: props.height || 30,
    borderRadius: 5,
    border: 'none',
    outline: 'none'
  }
  return (
    <div className='button'>
      <button onClick={props.handleClick} style={style} >{props.text}</button>
    </div>
  )
}

export default Button;
