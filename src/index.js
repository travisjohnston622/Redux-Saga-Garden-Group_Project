import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import App from './App';
// import rootSaga from './redux/sagas/RootSaga/_root.saga';

const middlewareList = process.env.NODE_ENV = 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];


// this startingPlantArray should eventually be removed
const startingPlantArray = [
  { id: 1, name: 'Rose' },
  { id: 2, name: 'Tulip' },
  { id: 3, name: 'Oak' }
];




// const plantList = (state = startingPlantArray, action) => {
//   switch (action.type) {
//     case 'ADD_PLANT':
//       return [ ...state, action.payload ]
//     default:
//       return state;
//   }
// };

function* addPlantSaga(action) {
  try {
    yield axios({
      method: 'POST',
      url: '/fruit',
      data: action.payload
    });
    yield put({type: 'GET_PLANTS'});
  }catch(err) {
    console.log('something wrong with POST: ', err);
  }
}

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

function* watcherSaga() {
  console.log('In Watcher Saga');
  yield takeEvery('GET_ELEMENTS', deletePlantSaga);
  yield takeEvery('POST_PLANT', addPlantSaga);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ plantListReducer }),
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));

// sagaMiddleware.run(rootSaga);

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
