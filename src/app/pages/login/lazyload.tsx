import { memo, ComponentType } from 'react'
import { lazyLoad } from "../../../utils/lazyload.config";
import { connect } from 'react-redux';
import { compose } from 'redux';

const Login = lazyLoad(
    () => import('./index'),
    module => module.Login,
)



const mapDispatchToProps = (dispatch: any) => {
    return {
        tryLogin: () => dispatch({ type: "LOGIN" }),
    }
}


const withConnect = connect(null, mapDispatchToProps);

export default compose<ComponentType>(withConnect, memo)(Login);