
import './../App.css';
import React from 'react';

class Menubar extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    <li>{this.props.item}</li>
                </ul>
            </div>
        )
    }
}

export default Menubar;
