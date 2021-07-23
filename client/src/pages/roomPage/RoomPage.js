import React, { useState, useEffect } from "react";
import socket from "../../socket";
import WaitingRoom from "./components/WaitingRoom"
import Classroom from "./components/ClassRoom"
import { useLocation, useHistory } from 'react-router-dom';

const RoomPage = () => {
  const roomCode = window.location.href.split('/').slice(-1)[0]; // get last fragment of url
  const [users, setUsers] = useState(1);
  const [content, setContent] = useState({
    users: []
  });
  const [roomStart, setRoomStart] = useState(false);
  const location = useLocation();
  const host = location.state.host;
  const currentUser = location.state.user;
  const history = useHistory();

  // Ensures user leave when closing tab
  window.onbeforeunload = () => {
    socket.emit('leave', currentUser)
  }

  useEffect(() => {
    socket.connect();
    socket.emit('userJoinedRoom', {roomCode: roomCode, username: username}, ({started}) => {
      setRoomStart(started);
    });

    socket.on('update_user', (content) => {
      setUsers(content.users.length)
      setContent(content.users);
      // setRoomStart(content.started);
      if (currentUser.username.length !== 0 && content.users.findIndex(user => user.userID === currentUser.userID) === -1) {
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