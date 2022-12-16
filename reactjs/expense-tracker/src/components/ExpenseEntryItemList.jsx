import React from "react";
import ExpenseEntryItem from "./ExpenseEntryItem";

class ExpenseEntryItemList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items:this.props.items
        }
    }

    render() {
        const lists = this.state.items.map((item) => 
            <tr key={item.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{new Date(item.spendDate).toString()}</td>
                <td>{item.category}</td>
                <td><a href="#" onClick={(e)=>this.handleUpdate(item.id,e)}>Update</a></td>
                <td><a href="#" onClick={(e)=>this.handleDelete(item.id,e)}>Delete</a></td>
            </tr>
        )
        return(
            <div>
                <table onMouseOver={this.handleMouseOver}>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Update</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lists}
                        <tr>
                            <td colSpan="1" style={{textAlign:"right"}}>Total Amount:</td>
                            <td colSpan="5" style={{textAlign:"left"}}>{this.getTotal()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ExpenseEntryItemList;