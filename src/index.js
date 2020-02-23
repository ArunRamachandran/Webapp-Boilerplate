import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
    render() {
        return (
            <h1 className="header">React app bootstraped</h1>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));