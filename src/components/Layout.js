import React, { Component } from 'react';
import io from 'socket.io-client';

const socketUrl = "http://192.168.10.2:3231"
export class Layout extends Component {
    constructor(props){
        super(props);

        this.state = {
            socket: null
        }
    }

    componentWillMount() {
        this.initSocket()
    }

    initSocket = () =>{
        const socket = io(socketUrl)
        socket.on('connect', () =>{
            console.log("its connected")
        })
        this.setState({socket})
    }
    render() {
        const { title } = this.props;
        return <div className="container">{title}</div>;
    }
}

Layout.propTypes = {};

export default Layout;
