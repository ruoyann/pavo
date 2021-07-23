import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    socket.once("create", (roomCode) => {
      history.push(`/room/${roomCode}`, { host: true, username: username });
    });
  }, [username]);

  const handleCreate = () => {
    socket.emit("create", { username: username });
    alert("creating");
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
