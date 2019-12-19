import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

import App from './App';

// this startingPlantArray should eventually be removed
const startingPlantArray = [
  { id: 1, name: 'Rose' },
  { id: 2, name: 'Tulip' },
  { id: 3, name: 'Oak' }
];



const plantList = (state = startingPlantArray, action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return [ ...state, action.payload ]
    default:
      return state;
  }
};

function* deletePlantSaga(action) {
  try {
    yield axios({
      method: 'DELETE',
      url: '/fruit/' + action.payload
    });
    yield put({ type: 'GET_PLANTS' });
  } catch(err) {
    console.log('something wrong with DELETE: ', err);
  }
}

const store = createStore(
  combineReducers({ plantList }),
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
