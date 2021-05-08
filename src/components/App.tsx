import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import ArcMenu from './common/arc-menu/ArcMenu'
import Header from './header/Header';

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route component={Header} path="/" exact/>
          <Route render={()=><>Test page 1</>} path="/1" exact/>
          <Route render={()=><>Test page 2</>} path="/2" exact/>
        </Switch>

        <ArcMenu radius={300} rotateBy={0}>
          <NavLink to="/1">
            <div className="menu-item">Test 1</div>
          </NavLink>
          <NavLink to="/2">
            <div className="menu-item">Test 2</div>
          </NavLink>
          <NavLink to="/">
            <div className="menu-item">Main</div>
          </NavLink>
        </ArcMenu>
      </BrowserRouter>
  );
}

export default App