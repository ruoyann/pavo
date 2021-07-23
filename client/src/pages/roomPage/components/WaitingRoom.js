import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import socket from "../../../socket";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
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
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 320,
    },
  }));

const WaitingRoom = ({host, roomCode, users, content, currentUser}) => {
    const classes = useStyles();

    const startSession = () => {
        socket.emit("startSession", roomCode);
    }

    const removeUser = (user) => {
      socket.emit("remove-user", {user: user, roomCode: roomCode});
    }

    const ParticipantDisplay = (host) => (user) => {
      return (
        <li>
          {user.username} 
          {host && 
            user.username !== currentUser.username &&
            <IconButton
                  edge="end"
                  onClick={() => removeUser(user)}
                >
              <DeleteIcon />
            </IconButton>
          }
        </li>
      );
    }

    return (
        <div>
        <Typography variant="h3">
          You are in room {roomCode}
        </Typography>
  
        <Typography variant="h6">
          Users in room: {users} <br/>
          List of users: 
        <ol>
          {content.length > 0 && content.map(ParticipantDisplay(host))}
        </ol>
        </Typography>
        {host &&        
          <Button 
              type="submit"
              variant="contained"
              color="default"
              className={classes.button}
              onClick={startSession}>
            Start session
          </Button>
        }
        {!host && 
          <Typography variant="h6">
            Please wait for host to start meeting
          </Typography>}
        </div>
    );
}

export default WaitingRoom;