import React, {Component} from 'react';

class Settings extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID());
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, this is a class component</h1>
                <h2>It`s {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

// const Settings = () =>{
//     return(
//         <div>
//             Settings
//         </div>
//     )
// }

export default Settings;