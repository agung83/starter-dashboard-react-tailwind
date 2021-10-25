import { memo, ComponentType } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Public, Private } from './routes';
import { NotFound } from './pages';
import { connect } from 'react-redux';
import { compose } from 'redux';

interface StateReduxAuth {
    AuthReducer: {
        isLogin: Boolean
    },

}

function App({ isLogin = false }) {
    console.log(`iko ${isLogin}`)
    return (
        <BrowserRouter>
            <Switch>
                {
                    isLogin ?
                        Private.map(({ key, path, component }) => (
                            <Route key={key} path={path} component={component} exact ></Route>
                        ))
                        :
                        Public.map(({ key, path, component }) => (
                            <Route key={key} path={path} component={component} exact ></Route>
                        ))
                }
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}



const mapStateToProps = (state: StateReduxAuth) => ({
    isLogin: state.AuthReducer.isLogin
})


const withConnect = connect(mapStateToProps, null);

export default compose<ComponentType>(withConnect, memo)(App);
