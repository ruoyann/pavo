import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import socket from "../../../socket";
import Logo from "../../../assets/pavo_logo.svg";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import "./WaitingRoom.css";
import Footer from "../../../components/footer";
import { Tooltip, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#d6336c",
    color: "white",
    height: 70,
    width: 400,
    fontSize: 30,
    margin: theme.spacing(3),
  }
}));

const WaitingRoom = ({
  isHost,
  roomHost,
  roomCode,
  users,
  content,
  currentUser,
}) => {
  const classes = useStyles();

  const startSession = () => {
    socket.emit("startSession", roomCode);
  };

  const removeUser = (user) => {
    socket.emit("remove-user", { user: user, roomCode: roomCode });
  };

  const ParticipantDisplay = (isHost) => (user) => {
    return (
      <li>
        {roomHost.username === user.username
          ? roomHost.username + " [Host]"
          : user.username}
        {isHost && user.userID !== currentUser.userID && (
          <Tooltip title="Kick user from room">
          <IconButton edge="end" onClick={() => removeUser(user)}>
            <DeleteIcon />
          </IconButton>
          </Tooltip>
        )}
      </li>
    );
  };

  return (
    <div className="waitingRoom">
      <Typography variant="h2" style={{ margin: 10 }}>
        You are in room {roomCode}
      </Typography>
      <div className="waitingRoom__content">
      <Paper className="leader waitingRoom__paper" elevation={3}>
        <Typography variant="h3" style={{ margin: 10 }}>
          Session Leader
        </Typography>
        <img src={Logo} alt="logo" style={{ width: "50%", minWidth: "50%" }} />
        <Typography variant="h3"> {roomHost.username} </Typography>
      </Paper>
      <Paper className="users waitingRoom__paper" elevation={3}>
        <Typography variant="h6" align="center">
          Users
        </Typography>
        <Typography variant="body1" align="center" style={{width: '60%'}}>
          <ol>{content.length > 0 && content.map(ParticipantDisplay(isHost))}</ol>
        </Typography>
      </Paper>
      </div>
      {isHost && (
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
      {!isHost && (
        <Typography variant="h6" className="loading">
          Waiting for host to start meeting
        </Typography>
      )}
      <Footer />
    </div>
  );
};

export default WaitingRoom;
