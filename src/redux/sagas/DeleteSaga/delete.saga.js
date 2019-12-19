import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* deletePlant(action) {
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

function* deletePlantSaga() {
    yield takeLatest('DELETE_PLANT', deletePlant);
}

export default deletePlantSaga;