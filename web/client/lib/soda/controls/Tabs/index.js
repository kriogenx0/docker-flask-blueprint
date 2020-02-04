import './Tabs.scss';

export default class Tabs extends React.Component {

  static propTypes = {
    tabs: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSelect: PropTypes.func.isRequired,
    align: PropTypes.string,
    activeClassName: PropTypes.string
  };

  static defaultProps = {
    align: 'left',
    activeClassName: 'current'
  };

  handleSelect = (tab, key) => {
    this.props.onSelect(key, tab);
  };

  render() {
    const { tabs, onSelect, value, align } = this.props;

    return (
      <div className={'ui-tabs tab-align-' + align.toLowerCase()}>
        <ul>
          {_.map(tabs, (tab, key) => (
            <li key={tab} onClick={this.handleSelect.bind(this, tab, key)} className={key === value ? 'current' : ''}>
              <div className="tab-link">
                {tab}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
