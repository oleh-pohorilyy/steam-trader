import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AppStateType } from '../types/AppStateType'
import { Item } from '../types/Item'
import Header from './header/Header'
import { getItemsFor } from '../redux/actions/Items'
import { DotaSearchQuery } from '../types/SearchQuery'

type Props = {
  items: Array<Item>,
  getItemsFor: (options: DotaSearchQuery) => void
}

const App: React.FC<Props> = ({ items, getItemsFor }) => {
  useEffect(() => {
    const options = {
      start: 0,
      count: 10,
      query: 'bogatyr'
    }
    getItemsFor(options)
  }, [])

  return (
    <>
      <div className="table">
      {
        items.map(e => 
        <a className="item" href={e.url}>
          <img src={e.img}/>
          <span>{e.name}</span>
          <span>{e.cost}</span>
        </a>
        )
      }
      </div>
      <BrowserRouter>
        <Switch>

        </Switch>
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = (state: AppStateType) => {
  return {
    items: state.items.items
  }
}

export default connect<{}, {}, {}, AppStateType>(mapStateToProps, { getItemsFor })(App);
