import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import AppComponent from './AppComponent';
import {loadUser} from "./AppActions";

const mapStateToProps = state => ({
    user: state.user,
    loading: state.loading
});

const mapDispatchToProps = dispatch => ({
    load: () => {
        dispatch(loadUser());
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppComponent));
