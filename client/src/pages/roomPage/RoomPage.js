import React, { useState, useEffect } from "react";
import socket from "../../socket";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import WaitingRoom from "./components/WaitingRoom"
import Classroom from "./components/ClassRoom"
import { useLocation, useHistory } from 'react-router-dom';

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

const RoomPage = () => {
  const roomCode = window.location.href.split('/').slice(-1)[0]; // get last fragment of url
  const [users, setUsers] = useState(1);
  const [content, setContent] = useState([]);
  const [roomStart, setRoomStart] = useState(false);
  const location = useLocation();
  const host = location.state.host;
  const username = location.state.username;
  const currentUser = {username};
  const history = useHistory();

  // Ensures user leave when closing tab
  window.onbeforeunload = () => {
    socket.emit('leave', currentUser)
  }

  useEffect(() => {
    socket.connect();

    socket.emit('userJoined', {roomCode: roomCode, username: username}, ({started}) => {
      setRoomStart(started);
    });

    socket.on('update_user', (content) => {
      setUsers(content.users.length)
      setContent(content.users);
      // setRoomStart(content.started);
      if (content.users.findIndex(user => user.username === username) === -1) {
        history.push("/");
        alert("Sorry, you have been removed by the host");
      }
    })

    socket.on('update_session_start', (content) => {
      setRoomStart(content.start)
    })
  }, [])


  return roomStart 
    ?     <Classroom 
    host={host}
    roomCode={roomCode}
    content={content}
    currentUser={currentUser}
    />
    : <WaitingRoom 
    host={host}
    roomCode={roomCode}
    users={users}
    content={content}
    currentUser={currentUser}
    />;
}

export default RoomPage;