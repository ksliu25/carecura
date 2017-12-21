import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import CommonForm from './components/CommonForm'
import './App.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sideBar: false,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar () {
    this.setState({sideBar: !this.state.sideBar})
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
            <nav id="sidebar" className={this.state.sideBar ? 'active' : ''}>
                <div className="sidebar-header">
                    <div className="navbar-header">
                        <button type="button" id="sidebarCollapse" className="btn btn-info navbar-btn" onClick={this.toggleSidebar}>
                            <i className="glyphicon glyphicon-align-left"></i>
                        </button>
                    </div>
                    <h3>CareCura</h3>
                    <strong>CC</strong>
                </div>

                <ul className="list-unstyled components">
                    <li className="active">
                        <Link to="/"><i className="glyphicon glyphicon-home"></i>Home</Link>

                    </li>
                    {<li>
                        <Link to="/about"><i className="glyphicon glyphicon-briefcase"></i>About</Link>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                            <i className="glyphicon glyphicon-duplicate"></i>
                            Pages
                        </a>
                    </li>}
                    <li>
                        <Link to="/topics"><i className="glyphicon glyphicon-link"></i>Topics</Link>
                    </li>
                    <li>
                        <Link to="/form"><i className="glyphicon glyphicon-paperclip"></i>Form</Link>
                    </li>
                    <li>
                        <a href="#">
                            <i className="glyphicon glyphicon-send"></i>
                            Contact
                        </a>
                    </li>
                </ul>

                {/*<ul className="list-unstyled CTAs">
                    <li><a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a></li>
                    <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a></li>
                </ul>*/}
            </nav>

            <div id="content">

                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/topics" component={Topics}/>
                            <Route path="/form" component={CommonForm}/>
                            <ul className="nav navbar-nav navbar-right">
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
      </Router>
      );
  }
}

export default App



        {/*<!-- jQuery CDN -->
         <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
         <!-- Bootstrap Js CDN -->
         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

         <script type="text/javascript">
             $(document).ready(function () {
                 $('#sidebarCollapse').on('click', function () {
                     $('#sidebar').toggleClass('active');
                 });
             });
         </script>*/}
