import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import "materialize-css"
import { useRoutes } from "./routes.js"
//BrowserRouter as Router

function App() {
  const routes = useRoutes(true)
  return (
    <Router>
      <div className='container'>
        {routes}

      </div>
    </Router>
  )
}

export default App;
