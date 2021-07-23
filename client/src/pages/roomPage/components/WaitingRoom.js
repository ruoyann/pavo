import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import socket from "../../../socket";
import Logo from "../../homepage/pavo.png";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Grid } from "@material-ui/core";
import "./WaitingRoom.css";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#d6336c",
    color: "white",
    height: 70,
    width: 400,
    fontSize: 30,
    margin: theme.spacing(3),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  root: {
    padding: theme.spacing(3, 2),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 320,
  },
}));

const WaitingRoom = ({ host, roomCode, users, content, currentUser }) => {
  const classes = useStyles();

  const startSession = () => {
    socket.emit("startSession", roomCode);
  };

  const removeUser = (user) => {
    socket.emit("remove-user", { user: user, roomCode: roomCode });
  };

  const ParticipantDisplay = (host) => (user) => {
    return (
      <li>
        {user.username}
        {host && user.userID !== currentUser.userID && (
          <IconButton edge="end" onClick={() => removeUser(user)}>
            <DeleteIcon />
          </IconButton>
        )}
      </li>
    );
  };

  return (
    <div className="container">
      <Typography variant="h2" style={{ margin: 10 }}>
        You are in room {roomCode}
      </Typography>
      <div className="leader">
        <Typography variant="h3" style={{ margin: 10 }}>
          Session Leader
        </Typography>
        <img src={Logo} style={{ width: "50%", height: "50%", margin: 30 }} />
        <Typography variant="h3"> Name </Typography>
      </div>
      <div className="users">
        <Typography variant="h6">
          Users in room: {users} <br />
          List of users:
          <ol>{content.length > 0 && content.map(ParticipantDisplay(host))}</ol>
        </Typography>
      </div>
      {host && (
        <Button
          type="submit"
          variant="contained"
          color="default"
          size="large"
          className={classes.button}
          onClick={startSession}
        >
          Start session
        </Button>
      )}
      {!host && (
        <Typography variant="h6">
          Please wait for host to start meeting
        </Typography>
      )}
    </div>
  );
};

export default WaitingRoom;
