import {createStore, combineReducers} from 'redux';
import { Campsites } from './campsitesReducer';
import { Comments } from './commentsReducer';
import { Partners } from './partnersReducer';
import { Promotions } from './promotionsReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        })
    );

    return store;
};