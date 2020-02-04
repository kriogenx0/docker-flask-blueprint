import './Icon.scss';

export default (props) => {
  return <i className={`control-icon fas fa-${props.name}`} {...props} />
};
