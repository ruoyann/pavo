import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import BoardContainer from "./BoardContainer";
import socket from "../../../socket"
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Grid } from "@material-ui/core";

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

const Classroom = ({host, roomCode, content, currentUser}) => {
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
          <Typography variant="h3">
            Room {roomCode}
          </Typography>
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
}

export default Classroom;