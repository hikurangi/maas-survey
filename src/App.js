import './App.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React            from 'react'

import Layout           from './components/Layout'

const App = () => (
  <div className="App">
    <MuiThemeProvider>
      <Layout />
    </MuiThemeProvider>
  </div>
)


export default App;
