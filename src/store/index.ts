import { createStore, createLogger } from 'vuex';
import todo from './modules/todo';

export default createStore({
    strict: true, // production 배포시 제거
    modules: {
        todo
    },
    plugins: [createLogger()]
});
