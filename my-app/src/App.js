import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
import WorkLog from './components/WorkLog';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [
            { id: uuid(), title: 'Alarm high energy consumpton is triggered', message: 'Energy consumption of this asset is high. Please resolve this issue ASAP', time: 'time 1'},
            { id: uuid(), title: 'New alarm created', message: 'A new alarm \'Low Apparent Power\' has been created.', time: 'time 2'},
        ]
    }
  }

  render() {
    return (
      <div className="App">
       <h1>Work Log</h1>
       {this.state.entries.map(({ id, title, message, time }) => (
         <WorkLog id={id} title={title} message={message} time={time} />
       ))}
      </div>
    );
  }
}

export default App;
