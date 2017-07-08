import React, { Component } from 'react';
import logo from './logo.svg';
import { Table } from 'reactstrap';
import Header from './components/header';
import TableLayout from './components/patient-drug-table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TableLayout />
      </div>
    );
  }
}

export default App;
