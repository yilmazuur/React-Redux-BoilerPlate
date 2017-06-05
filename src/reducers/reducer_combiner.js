import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SignInAndTokenReducer from './userManagement/signInAndToken';


const rootReducer = combineReducers({
    form: formReducer,
    user: SignInAndTokenReducer
});

export default rootReducer;