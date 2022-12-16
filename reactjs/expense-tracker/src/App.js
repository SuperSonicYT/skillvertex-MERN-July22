import React from 'react';
import './App.css';
import ExpenseEntryItem from './components/ExpenseEntryItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import StatefulComponent from './components/StatefulComponent';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      amount:34,
      items: [
        { id:1,name:"Mango",price:34,spendDate:"2022-12-12",category:"Food" },
        { id:2,name:"Mango",price:34,spendDate:"2022-12-12",category:"Food"},
        { id:2,name:"Apple",price:30,spendDate:"2022-02-12",category:"Food"},
        { id:2,name:"Apple",price:30,spendDate:"2022-02-12",category:"Food"}
      ]
    }
    setTimeout(() => this.updateamount(),1000)
    this.rerender = this.rerender.bind(this);
  }
    updateamount() {
        const date = new Date();
        const showTime = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds();
      this.setState((state,props) => (
        {
          amount:showTime
        }
      ))
    }

    rerender() {
      this.forceUpdate(() => (
        console.log(this.state.amount)
      ))
    }

  render() {
    console.log(this.state.amount)
    return(
      <div>
        <StatefulComponent />
        {this.state.items.map(item => (
          <ExpenseEntryItem item={item} />
        ))}
        <button onClick={this.rerender}>Re render</button>
      </div>
    )
  }
}

export default App;