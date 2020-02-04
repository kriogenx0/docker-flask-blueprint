import './AppLayout.scss';

export default class AppLayout extends React.Component {
  render() {
    return <div className='c-app_layout'>
      {this.props.children}
    </div>;
  }
}
