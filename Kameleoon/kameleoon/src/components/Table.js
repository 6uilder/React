import React from "react";
import PropTypes from 'prop-types';
import Row from "./Row";

const Table = ({siteAll, dataAll}) => {
  return (
    <ul className='tab-ul'>
      <li className='tab-li'>
        <div><span>NAME</span></div>
        <div><span>TYPE</span></div>
        <div><span>STATUS</span></div>
        <div><span>SITE</span></div>
        <div><span></span></div>
      </li>
      {dataAll.map(el => {
        return   <Row row={el} site={siteAll} key={el.id}/>
      }) }
    </ul>
  )
}

Table.propTypes = {
  siteAll: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Table