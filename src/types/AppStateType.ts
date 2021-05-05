import { store } from '../redux/store'

const state = store.getState()

export type AppStateType = typeof state