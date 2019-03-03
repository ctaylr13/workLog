import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
import WorkLog from './components/WorkLog';
import WorkForm from './components/WorkForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTitle: '',
      newMessage: '',
      entries: [
            { id: uuid(), title: 'Alarm high energy consumpton is triggered', message: 'Energy consumption of this asset is high. Please resolve this issue ASAP', time: 'time 1'},
            { id: uuid(), title: 'New alarm created', message: 'A new alarm \'Low Apparent Power\' has been created.', time: 'time 2'},
        ]
    };
    this.addLog = this.addLog.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.deleteLog = this.deleteLog.bind(this);
    
  }

  onChangeTitle = (e) => {
    this.setState({
      newTitle: e.target.value
    });
  }

  onChangeMessage = (e) => {
    this.setState({
      newMessage: e.target.value
    });
  }

  addLog = (e) => {
    e.preventDefault();
    console.log(this.state);
    var newLog = {
      id: uuid(),
      title: this.state.newTitle,
      message: this.state.newMessage,
      time: "time string"
    };
    this.setState({
      newMessage: {},
      newTitle: {},
      entries: [...this.state.entries, newLog]
    });
  }
  
  deleteLog = (id) => {
    console.log(this.state);
    this.setState(state => ({
      entries: state.entries.filter(entries => entries.id !== id)
    }))
  }
  

  render() {
    return (
      <div className="App">
       <h1>Work Log</h1>
       <WorkForm 
        addLogFunction={this.addLog}
        onChangeTitle={this.onChangeTitle}
        onChangeMessage={this.onChangeMessage} />
       {this.state.entries.map(({ id, title, message, time }) => (
         <WorkLog id={id} title={title} message={message} time={time} deleteFunction={this.deleteLog}/>
       ))}
      </div>
    );
  }
}

export default App;
