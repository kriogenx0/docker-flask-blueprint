import React from 'react';

import './Loader.scss';

export default class Loader extends React.Component {
  static propTypes = {
    // message: PropTypes.string
  }

  render() {
    return (
      <div className='control-loader'>
        <div className='loader' />
        {/*
        {this.props.message ? <div className='message'>{this.props.message}</div> : null}
        */}
      </div>
    );
  }
}
