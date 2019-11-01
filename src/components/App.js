import React from 'react'
import NavBar from './NavBar/NavBar'
import { Route, BrowserRouter , Switch } from 'react-router-dom'

//components
import About from './About/About'
import Home from './Home/Home'
import Post from './Post/Post'


function App() {
  return (
    <div className="App">
      <BrowserRouter >
          <NavBar/>
          <Switch>
              <Route path="/about" component={About}/>
              <Route exact path="/" component={Home}/>
              <Route path="/:id_post" component={Post}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
