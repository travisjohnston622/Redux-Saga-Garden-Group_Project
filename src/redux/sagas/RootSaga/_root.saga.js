import { all } from 'redux-saga/effects';
import deletePlantSaga from '../DeleteSaga/delete.saga';
import postPlantSaga from '../PostSaga/post.saga';
import getPlantsSaga from '../GetSaga/get.saga';


function* rootSaga() {
    console.log('WE WATCHING');
    yield all(
        [
            deletePlantSaga(),
            getPlantsSaga(),
            postPlantSaga(),
        ]
    );
}

export default rootSaga;

