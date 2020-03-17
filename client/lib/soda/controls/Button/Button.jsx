import React from 'react';
import { Button } from 'react-bootstrap';

import './Button.scss';

const ButtonComponent = (props) => (
  <Button {...props}>
    {props.children}
  </Button>
);

export default ButtonComponent;
