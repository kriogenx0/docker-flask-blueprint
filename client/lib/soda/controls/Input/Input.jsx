// @flow
import React, { Component } from 'react'
import { omitBy, isUndefined, pick } from 'lodash'
import classnames from 'classnames'

import styles from './styles.css'

const PASSDOWN_PROPS = [
  'autoComplete',
  'autoFocus',
  'disabled',
  'onBlur',
  'onFocus',
  'onKeyDown',
  'placeholder',
  'spellCheck',
  'type'
]

type Props = {
  autoComplete?: string,
  autoFocus?: boolean,
  className?: string,
  disabled?: boolean,
  onBlur?: (event: SyntheticEvent<*>) => mixed,
  onChange?: (event: SyntheticEvent<*>) => mixed,
  onFocus?: (event: SyntheticEvent<*>) => mixed,
  onKeyDown?: (event: SyntheticEvent<*>) => mixed,
  placeholder?: string,
  size: 'small' | 'medium' | 'large',
  spellCheck?: boolean,
  type: string,
  value?: number | string
}

type State = {
  value: number | string
}

class Input extends Component<Props, State> {
  static defaultProps = {
    size: 'medium'
  }

  state = {
    value: this.props.value || '' // eslint-disable-line react/destructuring-assignment
  }

  componentWillReceiveProps (nextProps: Props) {
    const { value } = this.props
    if (nextProps.value !== value) {
      this.setState({ value: nextProps.value })
    }
  }

  // Need to set state for the input value (https://github.com/facebook/react/issues/955)
  handleChange = (event: SyntheticEvent<*>) => {
    const { onChange } = this.props
    this.setState({ value: event.currentTarget.value })
    onChange && onChange(event)
  }

  render () {
    const { className, disabled, size } = this.props
    const cssClassName = classnames(
      className,
      styles[size],
      {
        [styles.disabled]: !!disabled
      }
    )
    // Exclude onChange ans value props from passdown so we can set local setState (see above)
    const childProps = omitBy(
      {
        ...pick(this.props, PASSDOWN_PROPS),
        className: cssClassName,
        onChange: this.handleChange,
        value: this.state.value // eslint-disable-line react/destructuring-assignment
      },
      isUndefined
    )

    return (<input {...childProps} />)
  }
}

export default Input
