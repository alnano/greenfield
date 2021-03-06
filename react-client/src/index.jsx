import React from 'react';
import ReactDOM from 'react-dom';
import get from './ajaxHelper.js';
import Map from './components/MapView.jsx';
import Headerbar from './components/Headerbar.jsx';
import Bottombar from './components/Bottombar.jsx';
import OwnerProfile from './components/OwnerProfile.jsx';
import SitterProfile from './components/SitterProfile.jsx';
import Login from './components/login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      pageState: 'HomePage'
    };
    this.navClick = this.navClick.bind(this);
  }

  componentDidMount() {
    // this.getData();
  }

  getData() {
    get('/catBnB', data => this.setState({data: data}));
  }

  navClick(data) {
    if(data === 'SignUp')
    this.setState({
      pageState: 'SignUp'
    })
    if(data === 'HomePage')
    this.setState({
      pageState: 'HomePage'
    })
    if(data === 'SignIn')
    this.setState({
      pageState: 'SignIn'
    })
  }


  render () {
    return (
    <div className = 'container'>
      <div className = ''>
<<<<<<< HEAD
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Headerbar pageState={this.navClick} />
        </nav>
=======
        <h1>CAT BnB</h1>
        <Headerbar />
      <Login />
      </div>
      <div className = 'row'>
        <div className = 'col.md-6'>
          <Sitterlist />
        </div>
        <div className = 'col-md-6'>
          <Mappinglist />
        </div>
>>>>>>> finished facebook login button
      </div>
        { this.state.pageState === 'HomePage' ?
           (
            <div className = 'row'>
              <div className = 'col-md-6'>
                <Map />
              </div>
            </div>
            )
          : this.state.pageState === 'SignUp' ?
            (
              <OwnerProfile />
            )
            : <SitterProfile />
        }
      <div className = '' >
        <Bottombar />
      </div>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
