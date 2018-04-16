import store from './Store';

export const _addUserDetails = (values) => {
    store.dispatch({
        type: 'ADD_USER_DETAIL',
        firstname: values.firstname,
        lastname: values.lastname,
        address: values.address,
        city: values.city,
        State : values.State,
        country : values.country,
    })
};

export const _addProfilePicture = (values) => {
    store.dispatch({
        type: 'ADD_PROFILE_PICTURE',
        profile: values.profile,
    })
};

export const _addLoginCredentials = (values) => {
    store.dispatch({
        type: 'ADD_LOGIN_CREDENTIALS',
        email: values.email,
        pass: values.pass,
    })
};