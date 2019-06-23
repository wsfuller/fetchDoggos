import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const middleware = composeWithDevTools(applyMiddleware(createLogger(), thunk));

export default createStore(reducer, middleware);
