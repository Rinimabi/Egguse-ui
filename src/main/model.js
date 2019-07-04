import {
    getHello,
    postHello
} from '../api/api'

export default {
    namespace: 'main',
    state: {
        data: ''
    },
    effects: {
        *getTestData(action, { call, put }) {
            //const result = yield put({ type: 'hello', data: '11111' });
            const result = yield call(getHello);
            console.log("result:", result);
        },
        *postHello({payload}, { call, put }) {
            const result = yield call(postHello, payload);
            console.log("result:", result);
        }
    },
    reducers: {
        saveData(data) {
            return data
        },
    },
};