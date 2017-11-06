import React, {Component} from 'react';
import '../styles.css';

export default class LoginComponent extends Component {
    state = {
        phone: ''
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        console.log('ev', ev);
    };

    onPhoneChange = (ev) => {
        this.setState({ phone: ev.target.value });
    };

    render() {
        return (
            <div className="login"
                 onSubmit={this.onSubmit}>
                <form>
                    <h3>Sign in</h3>
                    <div className="form-group">
                        <label>Phone number</label>
                        <input className="form-control"
                               onInput={this.onPhoneChange}
                               type="tel"
                               placeholder="Phone number"/>
                    </div>
                    <button className="btn btn-default"
                            type="submit">Submit
                    </button>
                </form>
            </div>
        );
    }
};