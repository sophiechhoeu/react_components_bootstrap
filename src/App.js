import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.css'
import Button from './components/Button'
import { Nav, NavItem } from './components/Nav'
import Alert from './components/Alert'
import Badge from './components/Badge'
import Card from './components/Card'

class App extends Component {
  render() {
    return (
      <div className="App container">
      <Alert hello variation="dark" message="Hi from short-hand!"/>
      <Alert variation="secondary" message="spag bol2"/>
      <Alert variation="primary"/>
      <Alert>this is a child</Alert>

      <div>
      <Badge title="secondary" message="hihhih" />
      <Badge title="primary" message="122"/>
      <Badge title="primary"/>
      </div>
      
      <div>
      <Card title="Card Title" message="This is a component card" type="primary" btnMessage="Click ME" imgSrc="#" href="#"/>
      </div>

        <div className='mt-3'>
          <Button title='Google' href='https://www.google.com/' />
          <Button title='Second' variation='primary' />
          <Button title='Third' variation='success' />
        </div>
        <div className='mt-3'>
          <Nav>
            <NavItem>First</NavItem>
            <NavItem active={ true }>Second</NavItem>
            <NavItem>Third</NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}

export default App;
