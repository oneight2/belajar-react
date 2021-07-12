import React, { Component } from 'react';
import Operan from './Operan';

export default class StateProps extends Component {
    constructor(props){
    super(props);
    this.state = {
    makanan : 'bakso'
    }
    }
    render() {
        return (
            <div>
                <h1>{this.state.makanan}</h1>
                <button onClick={() => this.setState({makanan : 'soto'})}>ubah makanan</button>
                <Operan/>
            </div>
        )
    }
}
