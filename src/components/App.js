import React from 'react'
import  {
  Switch,
  Route
} from 'react-router-dom'
import {
  Header,
  Navbar
} from './layouts'
import Home from './Home'
import Register from './forms/RegisterForm'
import CharacterList from './characters/CharacterList'
import EpisodeList from './episodes/EpisodeList'
import './App.css'

const App = () => {
  return (
    <div className="main">
      <Header />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/characters' component={CharacterList} />
        <Route path='/episodes' component={EpisodeList} />
      </Switch>
    </div>
  )
}

export default App
