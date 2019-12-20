import { all } from 'redux-saga/effects';
import deletePlantSaga from '../DeleteSaga/delete.saga';

function* rootSaga() {
    console.log('WE WATCHING');
    yield all(
        [
            deletePlantSaga(),
            getPlantsSaga(),
        ]
    );
}

export default rootSaga;