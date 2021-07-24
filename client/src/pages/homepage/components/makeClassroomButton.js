import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import socket from "../../../socket";
// import { Button } from "reactstrap";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#f76705",
    color: "white",
    width: "100%",
    fontSize: 20,
    margin: theme.spacing(1)
  }
}));

const MakeClassroomButton = ({ username, setInvalidUsername }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleMakeClass = () => {
    if (username === "") {
      setInvalidUsername(true);
    } else {
      setInvalidUsername(false);
      handleCreate();
    }
  };

  useEffect(() => {
    socket.connect();
    socket.once("create", (data) => {
      const roomCode = data.roomCode;
      const user = data.host;
      history.push(`/room/${roomCode}`, { isHost: true, user: user });
    });
  }, [username]);

  const handleCreate = () => {
    socket.emit("create", { username: username });
  };

  return (
    <Button
      variant="contained"
      className={classes.button}
      onClick={handleMakeClass}
    >
      Create a new session
    </Button>
  );
};

export default MakeClassroomButton;
