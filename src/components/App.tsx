import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AppStateType } from '../types/redux/AppStateType'
import { DotaItem } from '../types/DotaItem'
import Header from './header/Header'
import { getItemsFor, getItemId, getItemPriceHistogram } from '../redux/thunks/Items'
import { DotaSearchQuery } from '../types/DotaSearchQuery'
import { DotaItemPriceHistogramQuery } from '../types/DotaItemPriceHistogramQuery'
import { DotaItemPriceHistogram } from '../types/DotaItemPriceHistogram'

type Props = {
  items: Array<DotaItem>
  getItemsFor: (options: DotaSearchQuery) => void
  getItemId: (itemName: string) => Promise<number>
  getItemPriceHistogram: (options: DotaItemPriceHistogramQuery) => Promise<DotaItemPriceHistogram>
}

const App: React.FC<Props> = ({ items, getItemsFor, getItemId, getItemPriceHistogram }) => {

  return (
    <>
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

export default connect<{}, {}, {}, AppStateType>(
  mapStateToProps, 
  { getItemsFor, getItemId, getItemPriceHistogram }
)(App);
