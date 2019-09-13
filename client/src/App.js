import React from 'react';
import Tetris from './components/Tetris';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* Render the newly fetched data inside of this.state.data */}
        <Tetris />
      </div>
    )}};

    export default App;
