import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import ArcMenu from './common/arc-menu/ArcMenu'
import Header from './header/Header';
import SearchContainer from './search-page/Search.container';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route component={Header} path="/" exact/>
          <Route component={SearchContainer} path="/search" exact/>
        </Switch>

        <ArcMenu radius={300} rotateBy={-90}>
          <NavLink to="/">
            <div className="menu-item">Profile</div>
          </NavLink>
          <NavLink to="/search">
            <div className="menu-item">Search</div>
          </NavLink>
          <NavLink to="/">
            <div className="menu-item">Trade</div>
          </NavLink>
        </ArcMenu>
      </BrowserRouter>
    </div>
  );
}

export default App