import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Topics from './pages/Topics'
import './App.css'

// var yolo = () => {
//   var xd="yolo";
//   window.alert(xd);
//   return xd;
// }
// <Route path="/" component={yolo}/>
// <li><Link to="/xd">xD</Link></li>
class App extends Component {
  render() {
    return (<Router>
      <div>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>

        </nav>
        <Route exact="exact" path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>

      </div>
    </Router>)
  }
}

export default App;
