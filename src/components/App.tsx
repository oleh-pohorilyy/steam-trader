import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AppStateType } from '../types/redux/AppStateType'
import { searchItems, getItemId, getItemPriceHistogram } from '../redux/thunks/Items'

const App: React.FC<AppProps> = ({ items, searchItems, getItemId, getItemPriceHistogram }) => {
  return (
    <>
      {

      }
      <BrowserRouter>
        <Switch>

        </Switch>
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = (state: AppStateType) => ({
  items: state.items.items
})

const connector = connect(
  mapStateToProps, 
  { searchItems, getItemId, getItemPriceHistogram }
)

type AppProps = ConnectedProps<typeof connector>

export default connector(App)