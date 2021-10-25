import { memo, ComponentType } from 'react'
import { lazyLoad } from "utils/lazyload.config";
import { connect } from 'react-redux';
import { compose } from 'redux';


interface StateReduxSidebar {
    SidebarReducer: {
        status: any
    }
}

const Sidebar = lazyLoad(
    () => import('./index'), (module) => module.Sidebar
);

const mapStateToProps = (state: StateReduxSidebar) => ({
    statusSidebar: state.SidebarReducer.status
})


const withConnect = connect(mapStateToProps, null);

export default compose<ComponentType>(withConnect, memo)(Sidebar);