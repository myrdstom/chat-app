import React, { Component } from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED, LOGOUT } from '../Events';

const socketUrl = 'http://192.168.10.2:3231';
export class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            socket: null,
            user: null,
        };
    }

    componentDidMount() {
        this.initSocket();
    }

    // Connect to and initialize the socket
    initSocket = () => {
        const socket = io(socketUrl);
        socket.on('connect', () => {
            console.log('its connected');
        });
        this.setState({ socket });
    };

    /*
        Sets the user propery in state
        @param user {id: number, name: string}
     */

    setUser = user => {
        const { socket } = this.state;
        socket.emit(USER_CONNECTED, user);
        this.setState({ user });
    };

    logout = () => {
        const { socket } = this.state;
        socket.emit(LOGOUT);
        this.setState({ user:null });
    };

    render() {
        const { title } = this.props;
        return <div className="container">{title}</div>;
    }
}

Layout.propTypes = {};

export default Layout;
