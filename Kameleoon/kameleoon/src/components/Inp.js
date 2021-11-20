import PropTypes from "prop-types";
import React, {useState} from "react";


const Inp = ({onCreate}) => {
  const [value, setValue] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }

  return (    
      <form onSubmit={submitHandler}>
        <input type='text' 
                placeholder='What test are you looking for?'
                value={value}
                onChange={e => setValue(e.target.value)}
        />
      </form>
  )
}

Inp.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default Inp;