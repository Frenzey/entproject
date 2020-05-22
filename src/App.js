import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Route exact path="/" component={Dashboard} />
            <div className="container">
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
          </div>
        </Router>
    )
  }
}

export default App
