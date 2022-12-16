import React from "react";
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';

class ExpenseEntryItem extends React.Component {
    

    render() {
        return(
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.item.name}</Card.Title>
                    <Card.Text>Amount: Rs.{this.props.item.price}/-</Card.Text>
                    <Card.Text>Spend Date:{this.props.item.date}</Card.Text>
                    <Card.Text>Category: {this.props.item.category}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ExpenseEntryItem