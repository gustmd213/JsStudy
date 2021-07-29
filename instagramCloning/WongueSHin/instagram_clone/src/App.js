import React, { Component } from 'react';
import Form from './components/Form';
import ToDoListTemplate from './components/ToDoListTemplate';

class App extends Component {
  render() {
    return (
      <ToDoListTemplate form = {<Form/>}>
        템플릿 완성
      </ToDoListTemplate>
    );
  }
}

export default App;