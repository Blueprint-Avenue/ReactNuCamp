import { createStore, combineReducers } from 'redux';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        })
    );

    return store;
};
