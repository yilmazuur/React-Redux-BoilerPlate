import SignInForm from '../components/smart/SignInForm.jsx';
import { connect } from 'react-redux';
import { signInUser, signInUserSuccess, signInUserFailure } from '../actions/userManagement/userSignIn';

const mapDispatchToProps = (dispatch) => {
    return {
        //For any field errors upon submission (i.e. not instant check)
        validateAndSignInUser: (values) => {
            return dispatch(signInUser(values))
                .then((result) => {
                    if (result.payload.response && result.payload.response.status !== 200) {
                        // Note: Error's "data" is in result.payload.response.data (inside "response")
                        // success's "data" is in result.payload.data
                        dispatch(signInUserFailure(result.payload.response.data));
                        alert(result.payload.response.data);
                    }
                    else if (result.payload.data == null) {
                        dispatch(signInUserFailure("Services are down!(Probably)"));
                        alert("Services are down!(Probably)");
                    }
                    else {
                        //Store JWT Token to browser session storage 
                        //localStorage = persisted across tabs and new windows.
                        //sessionStorage = persisted only in current tab
                        localStorage.setItem('jwtToken', result.payload.data.access_token);
                        localStorage.setItem('tokenDetails', JSON.stringify(result.payload.data));
                        
                        //some other user operations maybe

                        //let other components know that everything is fine by updating the redux` state
                        dispatch(signInUserSuccess(result.payload.data.userName));
                    }
                });
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

let SignInFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignInForm);
export default SignInFormContainer;