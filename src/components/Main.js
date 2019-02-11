import React, { Component } from 'react';

const styles = {
    height: 20
}

class Main extends Component {
   
    render() {
        return (
            <div>
                <div>mooo</div>
                <button style={styles} onClick={this.props.onRequest}>Click me</button>
            </div>
        )
    }
}

export default Main