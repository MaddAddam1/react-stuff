import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';
import CardList from './CardList';
class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 44},
      {name: 'Jim', age: 32},
      {name: 'Mark', age: 13},
      {name: 'Jane', age: 58}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // alert('WooHoo!');
    this.setState({persons: [
      {name: newName, age: 1},
      {name: 'Jim', age: 22},
      {name: 'Mark', age: 93},
      {name: 'Jane', age: 28}
    ]})
  
  }

  nameChange = (event) => {

      this.setState({
        persons: [
          {name: 'Max', age: 1},
          {name: event.target.value, age: 22},
          {name: 'Mark', age: 93},
          {name: 'Jane', age: 28}
        ]
    })
  
  }

  togglePerson = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }

 render() {

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'

    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >

              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Max!!!!')}/>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} 
                changed={this.nameChange}/>
              <Person 
                name={this.state.persons[3].name} 
                age={this.state.persons[3].age}/>

          </div>
      );
    }

    return (
      <div className="App">
        <h2>Yo Yo YO YO YO</h2>

        <p>It's working!</p>

        <button 
        style={style} 
        onClick={this.togglePerson}>Switch Name</button>
        
        {persons};
          
       
      
    
      </div>
    );
  }
}

export default App;
