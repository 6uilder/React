import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', padding: '10px 15px', backgroundColor:'green'}}>
      <div style={{ paddingRight: '50px' }}>
        Хоть и SPA, но выбор есть:
      </div>
      <div style={{ display: 'flex'}}>
        <div style={{ marginRight: '20px', backgroundColor: 'yellow', borderRadius: '10px', padding: '5px' }}>
          <NavLink to='/' exact style={{textDecoration:'none'}}><b>Главная</b></NavLink>
        </div>
        <div style={{backgroundColor: 'yellow', borderRadius: '10px', padding: '5px'}}>
          <NavLink to='/info' style={{textDecoration:'none'}}><b>Информация</b></NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;