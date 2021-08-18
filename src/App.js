import React, { Component } from 'react';
import RouterWrap from './router';
import './App.less';
class App extends Component {
    render() {
        return (
            <div className="App">
                <RouterWrap/>
            </div>
        );
    }
}

export default App;
