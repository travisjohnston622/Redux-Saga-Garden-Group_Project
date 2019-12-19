import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getPlants() {
    console.log('in function* getPlant');
    try {
        const response = yield axios ({
            method: 'GET',
            url: '/api/plant'
        });
        yield put({
            type: 'SET_PLANTS',
            payload: response.data
        });
    } catch(err) {
        console.log('error fetching your plants:', err);
    } 
}

function* getPlantsSaga() {
    yield takeLatest('GET_PLANTS', getPlants);
}

export default getPlantsSaga;