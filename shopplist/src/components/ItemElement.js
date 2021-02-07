import React, { useContext } from 'react';
import Context from '../context';


const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 15px',
    border: '2px solid blue',
    borderRadius: '10px',
    marginBottom: '5px'
  },
  input: {
    marginRight: '5px'
  }
}

function ItemElement(props) {
  const { removeList } = useContext(Context);
  const classes = [];
  if (props.list.completed) {
    classes.push('ready')
  }
  
  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input 
        type='checkbox'
        checked={props.list.completed} 
        style={styles.input} 
        onChange={() => props.check(props.list.id)}></input>
        <strong>{props.index+1}</strong>
        <span>. </span>
        {props.list.title} 
      </span>
      <button className='btn' onClick={() => removeList(props.list.id)}>Удалить</button>
     
    </li>
  )
}

export default ItemElement;