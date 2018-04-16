import React from 'react';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

const user = ( state = [], action ) => {
    switch(action.type) {
        case 'ADD_USER_DETAIL':
            return {
                firstname: action.firstname,
                lastname: action.lastname,
                address: action.address,
                city: action.city,
                State :action.State,
                country :action.country,
            };
        case 'ADD_PROFILE_PICTURE':
            return {
                ...state,
                profile: action.profile,
            };
        case 'ADD_LOGIN_CREDENTIALS':
            return {
                ...state,
                email: action.email,
                pass: action.pass,
            };
        default:
            return state;
    }
};


const reducers = combineReducers({
    user: user,
    form: formReducer
});

export default reducers