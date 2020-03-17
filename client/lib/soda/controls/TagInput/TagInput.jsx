import React from 'react';
// import { FormControl } from 'react-bootstrap';

import TextField from 'controls/TextField';
import Icon from 'controls/Icon';

import './TagInput.scss';

export default class TagInput extends React.Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    onChange: PropTypes.func
  };

  static submitKeys = ['Enter', ',', ' ', 'Space'];

  state = {
    tags: null,
    input: ''
  };

  componentDidMount() {
    if (this.props.value) {
      const tags = typeof this.props.value === 'string' ? this.props.value.split(',') : this.props.value;
      this.setState({ tags });
    }
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleTagsTextKeyPress = (e) => {
    if (!_.includes(TagInput.submitKeys, e.key)) return;
    e.preventDefault();
    const tag = e.target.value;
    if (!tag.length) return;

    const tags = this.state.tags || [];
    if (!_.includes(tags, tag)) tags.push(tag);

    this.setState({
      input: ''
    });

    this.updateTags(tags);
  }

  handleRemoveTag = tag => {
    const tags = _.without(this.state.tags, tag);
    this.updateTags(tags);
  };

  updateTags = tags => {
    this.setState({ tags });
    if (this.props.onChange) this.props.onChange(tags);
  };

  render() {
    const { tags, input } = this.state;

    return (
      <div className='c-tag_input'>
        {/*
        <FormControl
          type="text"
          componentClass={this.props.multi ? 'textarea' : null}
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
        */}

        <TextField name='tags' value={input} onChange={this.handleInputChange} onKeyPress={this.handleTagsTextKeyPress} />
        {_.map(tags, tag => (
          <span className='tag deletable' key={tag} onClick={this.handleRemoveTag.bind(this, tag)}>
            {tag} <Icon name='times' />
          </span>
        ))}
      </div>
    );
  }
}
