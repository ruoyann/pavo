import React from "react";
import Board from "./Board";
import Button from "@material-ui/core/Button";
import socket from "../../../socket";
import { List, ListItem, Grid, Typography, Select, MenuItem } from "@material-ui/core";

const UserWhiteboard = (root) => (whiteboard) => {
  return (
    <Grid container spacing={2} justifyContent="flex-start">
      <Board
        color={root.state.color}
        size={root.state.size}
        roomCode={root.props.roomCode}
        user={whiteboard.user}
        image={whiteboard.image}
        eraseMode={root.state.erase}
        currentUser={root.props.currentUser}
      />
    </Grid>
  );
};

class Container extends React.Component {
  roomCode;
  constructor(props) {
    super(props);

    this.state = {
      color: "#000000",
      size: "5",
      erase: false,
    };
  }

  changeColor(params) {
    this.setState({
      color: params.target.value,
    });
  }

  changeSize(params) {
    this.setState({
      size: params.target.value,
    });
  }

  changeEraseMode = () => {
    this.setState({ ...this.state, erase: !this.state.erase });
  };

  render() {
    return (
      <Grid
        container
        spacing={2}
        alignItems="center"
      >
        <Grid item xs={1} className="userPalette">
          <div
            style={{
              border: "1px solid #000000",
              justifyContent: "center",
            }}
          >
            <List>
              <ListItem>
                <div className="color-picker-container">
                  <Typography variant="body1">Brush Color</Typography>
                  <input
                    type="color"
                    value={this.state.color}
                    onChange={this.changeColor.bind(this)}
                  />
                </div>
              </ListItem>
              <ListItem>
                <div className="brushsize-container">
                  <Typography variant="body1">Brush Size</Typography>
                  <Select
                    value={this.state.size}
                    onChange={this.changeSize.bind(this)}
                  >
                    <MenuItem value={5}> 5 </MenuItem>
                    <MenuItem value={10}> 10 </MenuItem>
                    <MenuItem value={15}> 15 </MenuItem>
                    <MenuItem value={20}> 20 </MenuItem>
                    <MenuItem value={25}> 25 </MenuItem>
                    <MenuItem value={30}> 30 </MenuItem>
                  </Select>
                </div>
              </ListItem>
              <ListItem>
                <Button onClick={this.changeEraseMode.bind(this)}>
                  {this.state.erase ? "Stop erasing" : "Erase"}
                </Button>
              </ListItem>
              <ListItem>
                {this.props.isHost && (
                  <Button
                    onClick={() => {
                      if (this.state.focus) {
                        socket.emit("get-whiteboards", {
                          roomCode: this.props.roomCode,
                          user: this.props.currentUser,
                        });
                      }
                      this.setState({
                        ...this.state,
                        focus: !this.state.focus,
                      });
                    }}
                  >
                    {this.state.focus ? "View all" : "View yours"}
                  </Button>
                )}
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={11} className="boards">
          {!this.props.isHost &&
            this.props.shareWhiteboards.map(UserWhiteboard(this))}
          {UserWhiteboard(this)({ user: this.props.currentUser })}
          {this.props.isHost &&
            !this.state.focus &&
            this.props.content.map(UserWhiteboard(this))}
        </Grid>
      </Grid>
    );
  }
}

export default Container;
