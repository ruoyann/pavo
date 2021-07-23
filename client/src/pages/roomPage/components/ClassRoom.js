import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import BoardContainer from "./BoardContainer";
import socket from "../../../socket";
import { Grid } from "@material-ui/core";
import Header from "../../../components/header";


const Classroom = ({ host, roomCode, content, currentUser }) => {
  const [shareWhiteboards, setShareWhiteboards] = useState([]);

    socket.on("share-whiteboard", (data) => {
      const index = shareWhiteboards.findIndex(whiteboard => whiteboard.roomCode === data.roomCode && 
        whiteboard.user.userID === data.user.userID);
      if (index === -1 && data.roomCode === roomCode && data.user.userID !== currentUser.userID) {
        setShareWhiteboards([...shareWhiteboards, data])
      }
    })

    socket.on("stop-share", (data) => {
      const index = shareWhiteboards.findIndex(whiteboard => whiteboard.roomCode === data.roomCode && whiteboard.user.userID === data.user.userID);
      if (index !== -1 && data.userID !== currentUser.username) {
        const newWhiteboard = shareWhiteboards.filter(whiteboard => whiteboard.roomCode !== data.roomCode || whiteboard.username !== data.username)
        setShareWhiteboards(newWhiteboard);
      }
    })

    const filteredContent = content.filter(x => x.userID !== currentUser.userID).map(x => {
      return ({
        user: {
          userID: x.userID, 
          username: x.username
        }
      });
    })

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={11}>
        <Typography variant="h3">Room {roomCode}</Typography>
      </Grid>
      <Grid item xs={12}>
        <BoardContainer
          host={host}
          roomCode={roomCode}
          currentUser={currentUser}
          shareWhiteboards={shareWhiteboards}
          content={filteredContent}
        />
      </Grid>
    </Grid>
  );
};

export default Classroom;
