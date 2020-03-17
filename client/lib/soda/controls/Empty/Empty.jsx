import React from 'react';

import './Empty.scss';

const Empty = (props) => (
  <div className='control-empty'>
    {props.children}
  </div>
);

export default Empty;
