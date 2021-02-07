import React from 'react';
import ItemElement from './ItemElement';

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

function Item(props) {
  
  return (
    <ul style={styles.ul}>
      {props.lists.map((list, index) => {
        return <ItemElement 
        list={list} 
        key={index} 
        index={index} 
        check={props.check}/>
      })}
    </ul>
  )
}

export default Item;