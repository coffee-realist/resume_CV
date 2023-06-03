import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import FRONTEND from './views/frontend'
import PROGRAMMINGLANGUAGES from './views/programminglanguages'
import DATABASES from './views/databases'
import GIT from './views/git'
import SECURITY from './views/security'
import SERVER from './views/server'
import DATAANALYS from './views/dataanalys'
import Main from './views/main'
import API from './views/api'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={FRONTEND} exact path="/frontend" />
        <Route
          component={PROGRAMMINGLANGUAGES}
          exact
          path="/programminglanguages"
        />
        <Route component={DATABASES} exact path="/databases" />
        <Route component={GIT} exact path="/git" />
        <Route component={SECURITY} exact path="/security" />
        <Route component={SERVER} exact path="/server" />
        <Route component={DATAANALYS} exact path="/dataanalys" />
        <Route component={Main} exact path="/" />
        <Route component={API} exact path="/api" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
