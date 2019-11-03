import React from 'react';

export default props => (
  !props.hide &&(
    <button className={`btn btn-${props.tipo}`} onClick={props.onClick} >
      <i className={`fa fa-${props.icon}`} />
    </button>
  )
);
