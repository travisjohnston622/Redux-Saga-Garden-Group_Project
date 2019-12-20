import { all } from 'redux-saga/effects';
import deletePlantSaga from '../DeleteSaga/delete.saga';
import postPlantSaga from '../PostSaga/post.saga';

function* rootSaga() {
    console.log('WE WATCHING');
    yield all(
        [
            deletePlantSaga(),
            postPlantSaga(),
        ]
    );
}

export default rootSaga;

