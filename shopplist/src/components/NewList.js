import React, { useState } from 'react';


function NewList({ onCreate }) {
  const [buy, setBuy] = useState('');

  function submitHandler(e) {
    e.preventDefault()
    if (buy.trim()) {
      onCreate(buy);
      setBuy('')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input value={buy} placeholder='Введите наименование' onChange={e => setBuy(e.target.value)}></input>
      <button type='submit' style={{backgroundColor: 'lightblue'}} >Добавить к покупкам</button>
    </form>
  )
}

export default NewList;