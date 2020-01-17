import './App.css'
import React            from 'react'

import Layout           from './components/Layout'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => {
  
  return (
    <div className="App">
      <MuiThemeProvider>
        <Layout />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
