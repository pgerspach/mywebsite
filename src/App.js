import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/Home"
import FutureProjects from './pages/FutureProjects';
import History from './pages/History';
import Interests from './pages/Interests';
import Projects from './pages/Projects';
import Skillset from './pages/Skillset';
import EduAndExp from './pages/EduAndExp';



class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/History" component={History} />
          <Route exact path="/FutureProjects" component={FutureProjects} />
          <Route exact path="/Interests" component={Interests} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Skillset" component={Skillset} />
          <Route exact path="/EduAndExp" component={EduAndExp} />

        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
