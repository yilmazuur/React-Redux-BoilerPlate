import {
	SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE, LOGOUT_USER
} from '../../actions/userManagement/userSignIn';

import {
	RESET_TOKEN
} from '../../actions/userManagement/userToken';

//user = userobj, 
// status can be: 
// 1. 'storage' ie. localstorage / localStorage)
// 2. 'signin' (signing in)
// 3. 'validate'(validate fields)
// 4. 'authenticated'(after signin) 
// 5. 'logout' (after logout)

const INITIAL_STATE = { user: null, status: null, error: null, loading: false };

export default function (state = INITIAL_STATE, action) {
	let error;
	switch (action.type) {
		case RESET_TOKEN:// remove token from storage make loading = false
			return { ...state, user: null, status: 'storage', error: null, loading: false };

		case SIGNIN_USER:// sign in user,  set loading = true and status = signin
			return { ...state, user: null, status: 'signin', error: null, loading: true };
		case SIGNIN_USER_SUCCESS://return authenticated user,  make loading = false and status = authenticated
			return { ...state, user: action.username, status: 'authenticated', error: null, loading: false }; //<-- authenticated
		case SIGNIN_USER_FAILURE:// return error and make loading = false
			error = action.payload.data || { message: action.payload.message };//2nd one is network or server down errors      
			return { ...state, user: null, status: 'signin', error: error, loading: false };
		case LOGOUT_USER:
			return { ...state, user: null, status: 'logout', error: null, loading: false };

		default:
			return state;
	}
}
