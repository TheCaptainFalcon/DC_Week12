import React, { Component } from 'react';

class DemoComponent extends Component {
    
    render() {
        const { issue_number }  = this.props.match.params
        console.log(this.props);   
        return(
            <div>
                <p>{issue_number}</p>
            </div>
        )
    }
}

export default DemoComponent;