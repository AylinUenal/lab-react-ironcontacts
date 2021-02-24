import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';



class App extends Component {

  state = {
    contacts: contacts.slice(0, 5)
  }
  
  addRandomContact = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    //console.log(randomContact)
    this.setState((state) => ({
      contacts: [randomContact, ...state.contacts]
    }))
  }


  sortByName = () => {
    this.setState((state) => ({
      contacts: state.contacts.sort((a, b) => a.name.localeCompare(b.name))
    }))
  }

  sortByPopularity = () => {
    this.setState((state) => ({
      contacts: state.contacts.sort((a, b) => a.popularity - b.popularity)
    }))
  }

  render() {
    
    return (
      <div>
      <h1>IronContacts</h1>

        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>

        <table>
          <thead>
        <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        </tr>
          </thead>
       
              <tbody>
        {this.state.contacts.map(contact => {
          return (
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} style={{width: '100px'}} alt="portrait"/></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                </tr>
          
          )
        })}
              </tbody>
      </table>
      </div>
    );
  }
}

export default App;
