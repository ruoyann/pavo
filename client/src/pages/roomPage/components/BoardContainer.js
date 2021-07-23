import React from 'react';
import Board from './Board';
import Button from "@material-ui/core/Button";
import socket from "../../../socket"


class Container extends React.Component
{s
    roomCode;
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
            size: "5", 
            erase: false,
        }
    }

    changeColor(params) {
        this.setState({
            color: params.target.value
        })
    }

    changeSize(params) {
        this.setState({
            size: params.target.value
        })
    }

    clearWhiteboard = () => {
        socket.connect();
        socket.emit("clear", {roomCode: this.props.roomCode, username: this.props.username});
    }

    changeEraseMode = () => {
        this.setState({...this.state, 
            erase: !this.state.erase})
    }


    render() {

        return (
            <div className="container">
                <div class="tools-section">
                    <div className="color-picker-container">
                        Select Brush Color : &nbsp; 
                        <input type="color" value={this.state.color} onChange={this.changeColor.bind(this)}/>
                    </div>

                    <div className="brushsize-container">
                        Select Brush Size : &nbsp; 
                        <select value={this.state.size} onChange={this.changeSize.bind(this)}>
                            <option> 5 </option>
                            <option> 10 </option>
                            <option> 15 </option>
                            <option> 20 </option>
                            <option> 25 </option>
                            <option> 30 </option>
                        </select>
                    </div>
                    <Button onClick={this.clearWhiteboard.bind(this)}>
                        Clear whiteboard
                    </Button>
                    <Button onClick={this.changeEraseMode.bind(this)}>
                        {this.state.erase ? "Stop erasing": "Erase"}
                    </Button>
                </div>

                <div class="board-container">
                    <Board color={this.state.color} size={this.state.size} 
                    roomCode={this.props.roomCode} username={this.props.username} image={this.props.image}
                    eraseMode ={this.state.erase}/>
                </div>
            </div>
        )
    }
}

export default Container