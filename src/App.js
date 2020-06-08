import React, { Component } from 'react';
import './App.css';
class App extends Component {
render() {
const helloWorld = 'Добро пожаловать в Путь к изучению React';
const helloWorld2 = 'Добро пожаловать в Путь к изучению React';
return (
<div className="App">
<h2>{helloWorld}</h2>
<h3>{helloWorld2}</h3>
</div>
);
}
}
export default App;