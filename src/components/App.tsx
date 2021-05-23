import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import ArcMenu from './common/arc-menu/ArcMenu'
import Header from './header/Header';
import SearchContainer from './search-page/Search.container';
import './App.css'
import Profile from './profile-page/Profile';
import Trade from './trade-page/Trade';

const App: React.FC = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route component={Profile} path="/" exact/>
          <Route component={SearchContainer} path="/search" exact/>
          <Route component={Trade} path="/trade" exact/>
        </Switch>

        <ArcMenu radius={300} rotateBy={-90}>
          <NavLink to="/">
            <div className="menu-item">Profile</div>
          </NavLink>
          <NavLink to="/search">
            <div className="menu-item">Search</div>
          </NavLink>
          <NavLink to="/trade">
            <div className="menu-item">Trade</div>
          </NavLink>
        </ArcMenu>
      </BrowserRouter>
    </div>
  );
}

export default App