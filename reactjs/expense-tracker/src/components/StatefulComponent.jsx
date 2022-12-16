import React from "react";

class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }

        setInterval(() => this.setTime(),1000);
    }

    setTime() {
        console.log(this.state.date)
        this.setState((state,props) => (
            {
                date: new Date()
            }
        ))

    }

    render() {
        return(
            <div>
                <p>This current time is {this.state.date.toString()}</p>
            </div>
        )
    }
}
export default StatefulComponent;