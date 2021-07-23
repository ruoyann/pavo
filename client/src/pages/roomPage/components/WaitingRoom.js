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
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 320,
  },
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
        <img src={Logo} alt="logo" style={{ width: "50%", minWidth: "50%" }} />
        <Typography variant="h3"> {roomHost.username} </Typography>
      </div>
      <div className="users">
        <Typography variant="h6">
          Users in room: {users} <br />
          List of users:
          <ol>{content.length > 0 && content.map(ParticipantDisplay(isHost))}</ol>
        </Typography>
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
        <Typography variant="h6">
          Please wait for host to start meeting
        </Typography>
      )}
      <Footer />
    </div>
  );
};

export default WaitingRoom;
