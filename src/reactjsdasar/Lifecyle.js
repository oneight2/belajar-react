import React, { Component } from 'react';
import Sublifecycle from './Sublifecycle';

class Lifecyle extends Component {
    constructor(props){
        super(props);

        this.state = {
            makanan :"bakso",
            data : {},
            tampilHalamanSub: false,
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            this.setState({
                data : json
            })
        })
    }

    ubahMakanan(value){
        this.setState({
            makanan: value
        })
    }
 

    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>

                {this.state.tampilHalamanSub && <Sublifecycle ubahMakanan={(value)=>this.ubahMakanan(value)}/>}
                <button onClick={()=> this.setState({tampilHalamanSub: !this.state.tampilHalamanSub})}>tampilkan halaman sub</button>
                
            </div>
        );
    }
}

export default Lifecyle;
