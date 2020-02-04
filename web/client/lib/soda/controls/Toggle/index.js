import './Toggle.scss';

export default class Toggle extends React.Component {

  render() {
    return (
      <label className={`control-toggle${this.props.disabled ? ' toggle-disabled' : ''}`}>
        <input type="checkbox" value={true} {...this.props} />
        <span className="slider" />
      </label>
    );
  }

}
