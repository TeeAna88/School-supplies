import { Component } from "react";

export class SchoolSupply extends Component {
  state = {
    userInput: '',
    SchoolSupply: []

  }

  onChangeEvent(e) {
this.setState({ userInput:e })
  }

  addItem(input){
    if (input === ''){
        alert ('Please enter an item');
    } else {
    let listArray = this.state.SchoolSupply;
    listArray.push(input);
    this.setState({SchoolSupply: listArray, userInput: ''})
  }}

  deleteItem(){
    let listArray = this.state.SchoolSupply;
    listArray = [];
    this.setState({SchoolSupply:listArray})
  }

  crossedWord(e){
    const li = e.target;
    li.classList.toggle('crossed');
  }

  onFormSubmit(e){
     e.preventDefault();
  }

  render(){
    return(
        <div>
            <form onSubmit={this.onFormSubmit}>
        <div className="container">
         <input onChange={ (e) => {this.onChangeEvent(e.target.value)} } value={this.state.userInput} placeholder="Add school supplies" type="text" />
        </div>
        <div className="container">
         <button onClick={() => this.addItem(this.state.userInput)} className="add">Add</button>
        </div>
        <ul>
            {this.state.SchoolSupply.map((item, index) => (
                <li key = {index} onClick={this.crossedWord} > {item} </li>
            ))}
            
        </ul>
        <div  className="container">
          <button onClick = {() => this.deleteItem()} className="delete">Delete</button>
        </div>
        </form>
        </div>
    )
  }
}