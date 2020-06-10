import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Technologies from './Technologies.js';

class App extends Component {
   
    render() {
        return ( 
		<div className = "App" > 
				<Header />
                <Technologies />
                    </div>
                )
            } 
    }


export default App;