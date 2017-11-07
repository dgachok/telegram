import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import AppComponent from './AppComponent';

const mapStateToProps = state => ({
    user: state.user,
    loading: state.loading
});

export default withRouter(connect(mapStateToProps)(AppComponent));
