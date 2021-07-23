  
import { Button, Typography, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import socket from "../../../socket"


class Board extends React.Component {
    timeout;
    ctx;
    isDrawing = false;
    roomCode; 
    userID;
 
    constructor(props) {
        super(props);
        this.state = {
            shared: false, 
        }
        socket.on("canvas-data", function(data){
            if (data.roomCode.localeCompare(props.roomCode) !== 0 || 
                data.user.userID.localeCompare(props.user.userID) !== 0) {
                    return;
                }
            var root = this;
            var interval = setInterval(function(){
                if(root.isDrawing) return;
                root.isDrawing = true;
                clearInterval(interval);
                var image = new Image();
                var canvas = document.querySelector(`#board-${props.roomCode}-${props.user.userID}`);
                if (canvas) {
                    var ctx = canvas.getContext('2d');
                    image.onload = function() {
                        ctx.drawImage(image, 0, 0);
    
                        root.isDrawing = false;
                    };
                    image.src = data.image;
                }
            }, 200)
        })

        socket.on("clear", (data) => {
            if (data.roomCode === props.roomCode && data.user.userID === props.user.userID) {
                const canvas = document.getElementById(`board-${this.props.roomCode}-${this.props.user.userID}`);
                if (!canvas) {
                    return;
                }
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        })

        socket.on("get-whiteboards", (data) => {
            if (data.roomCode === props.roomCode && data.user.userID !== props.user.userID && props.currentUser.userID !== data.user.userID) {
                var canvas = document.querySelector(`#board-${this.props.roomCode}-${this.props.user.userID}`);
                if (!canvas) {
                    return;
                }
                var base64ImageData = canvas.toDataURL("image/png");
                socket.emit("canvas-data", {image: base64ImageData, roomCode: this.props.roomCode, user: this.props.user});
            }
        })
        this.handleShare = this.handleShare.bind(this)
        this.stopShare = this.stopShare.bind(this)
    }

    componentDidMount() {
        this.drawOnCanvas();
        this.initialiseImage();
    }

    componentWillReceiveProps(newProps) {
        this.ctx.strokeStyle = newProps.eraseMode
            ? "#FFFFFF"
            : newProps.color;
        this.ctx.lineWidth = newProps.size;
    }

    drawOnCanvas() {
        var canvas = document.querySelector(`#board-${this.props.roomCode}-${this.props.user.userID}`);
        if (!canvas) {
            return;
        }
        this.ctx = canvas.getContext('2d');
        var ctx = this.ctx;

        var sketch = document.querySelector(`#sketch-${this.props.roomCode}-${this.props.user.userID}`);
        var sketch_style = getComputedStyle(sketch);
        canvas.width = parseInt(sketch_style.getPropertyValue('width'));
        canvas.height = parseInt(sketch_style.getPropertyValue('height'));

        var mouse = {x: 0, y: 0};
        var last_mouse = {x: 0, y: 0};

        /* Mouse Capturing Work */
        canvas.addEventListener('mousemove', function(e) {
            last_mouse.x = mouse.x;
            last_mouse.y = mouse.y;

            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
        }, false);


        /* Drawing on Paint App */
        ctx.lineWidth = this.props.size;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = this.props.eraseMode ? "#FFFFFF"
            : this.props.color;
        canvas.addEventListener('mousedown', function(e) {
            canvas.addEventListener('mousemove', onPaint, false);
        }, false);

        canvas.addEventListener('mouseup', function() {
            canvas.removeEventListener('mousemove', onPaint, false);
        }, false);

        var root = this;
        var onPaint = function() {
            ctx.beginPath();
            ctx.moveTo(last_mouse.x, last_mouse.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.closePath();
            ctx.stroke();

            if(root.timeout != undefined) clearTimeout(root.timeout);
            root.timeout = setTimeout(function(){
                var base64ImageData = canvas.toDataURL("image/png");
                socket.emit("canvas-data", {image: base64ImageData, roomCode: root.props.roomCode, user: root.props.user});
            }, 1000)
        };
    }

    handleShare() {
        var canvas = document.querySelector(`#board-${this.props.roomCode}-${this.props.user.userID}`);
        if (!canvas) {
            return;
        }
        var base64ImageData = canvas.toDataURL("image/png");
        socket.emit("share-whiteboard", {image: base64ImageData, roomCode: this.props.roomCode, user: this.props.user});
        this.setState({shared: true})
    }

    stopShare() {
        socket.emit("stop-share", {roomCode: this.props.roomCode, user: this.props.user});
        this.setState({shared: false});
    }


    initialiseImage() {        
        if (this.props.image) {
            var image = new Image();
            // var canvas = document.querySelector(`#board-${props.roomCode}-${props.username}`);
            const canvas = document.getElementById(`board-${this.props.roomCode}-${this.props.user.userID}`);
            if (!canvas) {
                return null;
            }
            var ctx = canvas.getContext('2d');
            image.onload = function() {
                ctx.drawImage(image, 0, 0);
            };
            image.src = this.props.image;
        }
        const canvas = document.getElementById(`board-${this.props.roomCode}-${this.props.user.userID}`);
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    clearWhiteboard = () => {
        const canvas = document.getElementById(`board-${this.props.roomCode}-${this.props.user.userID}`);
        if (!canvas) {
            return;
        }
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        socket.emit("clear", {roomCode: this.props.roomCode, user: this.props.user})
    }

    render() {
        console.log("props are in render", this.props)
        return (
            <Grid item xs={12}>
                <Typography variant="h5">{this.props.user ? this.props.user.username : ""}</Typography>
                {this.state.shared 
                ? <Button onClick={this.stopShare}>
                    Stop sharing whiteboard
                </Button>
                : <Button onClick={this.handleShare}>
                Share whiteboard
            </Button>}
                <Button onClick={this.clearWhiteboard.bind(this)}>
                    Clear whiteboard
                </Button>
                <div class="sketch" id={`sketch-${this.props.roomCode}-${this.props.user.userID}`}>
                    <canvas className="board" id={`board-${this.props.roomCode}-${this.props.user.userID}`} 
                    style={{border:"1px solid #000000"}} width="800" height="800"></canvas>
                </div>
            </Grid>
        )
    }
}

export default Board