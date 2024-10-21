import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './userReducer';
import itineraryReducer from './itineraryReducer';

const rootReducer = combineReducers({
  user: userReducer,
  itinerary: itineraryReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) 
);

export default store;
