import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class Select extends React.Component {

  static propTypes = {
    label: PropTypes.string,
    values: PropTypes.array,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  };

  constructor(p) {
    super(p);
    this.id = 'dropdown-' + (p.label ? p.label.toLowerCase().replace(/\s+/g, '_') : Math.random().toString().split('.')[1])
  }

  handleSelect = (value) => {
    this.props.onChange(value);
  };

  // Array of arrays
  // label = option[1]
  // value = option[0]
  renderAsArrays = () => {
    return _.map(this.props.values, option => this.renderMenuItem(option[1], option[0], option));
  };

  // Array of objects
  // label = option.label
  // value = option.value
  renderAsObjects = () => {
    return _.map(this.props.values, option => this.renderMenuItem(option.label, option.value, option));
  };

  // Array of strings
  // label & value = option
  renderAsStrings = () => {
    return _.map(this.props.values, option => this.renderMenuItem(option, option, option));
  };

  renderMenuItem = (label, value, passedValue) => {
    return (
      <MenuItem eventKey={passedValue} key={label + '-' + value} active={passedValue === this.props.value} value={value} onSelect={this.handleSelect}>
        {label}
      </MenuItem>
    );
  };

  render() {
    const { values, value, label, disabled } = this.props;
    let title = label;
    let valuesType = 'strings';

    // Parse first value
    if (values && values[0]) {
       if (values[0] instanceof Array) {
         valuesType = 'arrays';
         title = typeof value !== 'undefined' ? value[1] : value;
       } else if (typeof values[0] == 'object') {
         valuesType = 'objects';
         title = typeof value !== 'undefined' ? value.label : value;
       } else {
         title = value;
       }
    } else {
      console.warn('Select has no values provided');
    }

    title || (title = label);


    const dropdownProps = {
      title: title || label || '',
      id: this.id,
      value,
      disabled
    };

    return (
      <DropdownButton {...dropdownProps}>
        {(() => {
          if (valuesType === 'arrays')
            return this.renderAsArrays();
          else if (valuesType === 'objects')
            return this.renderAsObjects();
          else
            return this.renderAsStrings();
        })()}
      </DropdownButton>
    );
  }
}
