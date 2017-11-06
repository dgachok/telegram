import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class UserComponent extends Component {
    static propTypes = {
        user: PropTypes.object
    };

    render () {
        const {user} = this.props;

        return (
            <div>
                {user.name}
            </div>
        );
    }
}
