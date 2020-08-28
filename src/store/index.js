import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'reducers/rootReducer'

let middleware = [thunk]

const enhancer = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)
const store = createStore(rootReducer, {}, enhancer)

export default store
