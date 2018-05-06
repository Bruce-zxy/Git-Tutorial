import { take, takeEvery, put, call, all }   from 'redux-saga/effects';

// actions
// import { actions as timeactions }       from '../reducers';

// functions
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// sagas
// export function* incrementAsync() {
    // yield put(timeactions.set(new Date().toLocaleTimeString()));
    // yield call(delay, 2000);
    // yield put(timeactions.set(new Date().toLocaleTimeString()));
// }


export default function* rootSaga() {
    console.log('Hello Sagas!');
    yield all([

    ]);
}
