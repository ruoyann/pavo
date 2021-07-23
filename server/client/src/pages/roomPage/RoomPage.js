import React, { useState, useEffect } from "react";
import socket from "../../socket";
import Typography from "@material-ui/core/Typography";

const RoomPage = () => {

  const roomCode = window.location.href.split('/').slice(-1)[0]; // get last fragment of url
  const [users, setUsers] = useState(1);
  const [content, setContent] = useState([]);

  // Ensures user leave when closing tab
  window.onbeforeunload = () => {
    socket.emit('leave')
  }

  useEffect(() => {
    socket.connect();

    socket.emit('userJoined', roomCode);

    socket.on('update_user', (content) => {
      setUsers(content.users.length)
      setContent(content.users);
    })
  }, [])

  return (
      <div>
      <Typography variant="h3">
        You are in room {roomCode}
      </Typography>

      <Typography variant="h6">
        Users in room: {users} <br/>
        List of users: 
      <ol>
        {content.length > 0 ? content.map(u => <li> {u.userID} </li>) : null}
      </ol>
      </Typography>


      </div>
  );
}

export default RoomPage;