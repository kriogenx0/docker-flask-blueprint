import React from 'react';
import { FormControl } from 'react-bootstrap';

import './TextField.scss';

export default class TextField extends React.PureComponent {
  static propTypes = {
    readMode: PropTypes.bool
    // value: PropTypes.string
    // placeholder
    // onChange
  };

  static defaultProps = {
    readMode: false
  }

  state = {
    invalid: false
  };

  handleValidate = () => {
    const valid = this.props.validate(this.props.value);
    this.setState({ invalid: !valid });
  };

  handleKeyUp = (e) => {
    this.handleValidate();
    this.props.onKeyUp && this.props.onKeyUp(e);
  };

  render() {
    const formControlProps = Object.assign({
      type: 'text',
    }, this.props);

    if (this.props.multi) {
      formControlProps.componentClass = this.props.multi;
      delete formControlProps.multi;
    }

    if (this.props.validate) {
      formControlProps.onKeyUp = this.handleKeyUp;
      delete formControlProps.validate;
    }

    const { readMode } = this.props;
    delete formControlProps.readMode;


    return (
      <div className={'c-text_field' + (this.state.invalid ? ' has-error' : '') + (readMode ? ' text_field-read_mode' : '')}>
        <FormControl {...formControlProps} />
      </div>
    );
  }
}
