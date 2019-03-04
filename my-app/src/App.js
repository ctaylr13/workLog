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
            { id: uuid(), title: 'Alarm high energy consumpton is triggered', message: 'Energy consumption of this asset is high. Please resolve this issue ASAP',date: "2019-14-05", time: '00:08:00'},
            { id: uuid(), title: 'New alarm created', message: 'A new alarm \'Low Apparent Power\' has been created.', date: "2019-14-05", time: '00:07:00'},
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
    e.target.reset();
    console.log(this.state);
    var date = new Date();
    var newLog = {
      id: uuid(),
      title: this.state.newTitle,
      message: this.state.newMessage,
      date: date.toISOString().substring(0,10),
      time: date.toISOString().substring(11, 19)
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
       {this.state.entries.map(({ id, title, message, date, time }) => (
         <WorkLog key={id} id={id} title={title} message={message} date={date} time={time} deleteFunction={this.deleteLog}/>
       ))}
      </div>
    );
  }
}

export default App;
