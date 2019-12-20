import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addPlant(action) {
    try {
        yield axios({
          method: 'POST',
          url: '/api/plant',
          data: action.payload
        });
        yield put({type: 'GET_PLANTS'});
      } catch(err) {
        console.error('Something went wrong with POST: ', err);
    }
}

function* postPlantSaga() {
    yield takeLatest('ADD_PLANT', addPlant);
}

export default postPlantSaga;
