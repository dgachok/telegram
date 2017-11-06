import UserComponent from "./UserComponent";
import {connect} from 'react-redux';

const UserContainer = connect(
    state => ({
        user: state.user
    })
)(UserComponent);

export default UserContainer;