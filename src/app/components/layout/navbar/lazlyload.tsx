import { memo, ComponentType } from "react";
import { lazyLoad } from "utils/lazyload.config";
import { connect } from 'react-redux';
import { compose } from 'redux';

interface StateReduxSidebar {
    SidebarReducer: {
        status: any
    }
}

const Navbar = lazyLoad(
    () => import('./index'), (module) => module.Navbar

);


const mapStateToProps = (state: StateReduxSidebar) => ({
    statusSidebar: state.SidebarReducer.status
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        setLightMode: () => dispatch({ type: "LIGHT" }),
        setDarkMode: () => dispatch({ type: "DARK" }),
        showSidebar: () => dispatch({ type: "SHOWSIDEBAR" }),
        hiddenSidebar: () => dispatch({ type: "HIDDENSIDEBAR" })
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose<ComponentType>(withConnect, memo)(Navbar);