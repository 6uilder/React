import React from "react";
import PropTypes from 'prop-types';
//import Context from "../Context";

const Row = ({row, site}) => {
  for (let i of site) {
    if (i.id === row.siteId) {
      site = i.url;
    }
  }
  return (
    <li className='tab-li'>
      <div>{row.name}</div>
      <div>{row.type}</div>
      <div>{row.status}</div>
      <div>{site}</div>
      <button>btn</button>  
    </li>
  )
}

Row.propTypes = {
  row: PropTypes.object.isRequired
}

export default Row