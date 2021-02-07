import React from 'react';

function Preloader() {
  return (
    <div style={{display:'flex', justifyContent:'center', margin:'10px'}}>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Preloader;