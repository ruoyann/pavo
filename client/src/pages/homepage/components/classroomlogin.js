import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import socket from "../../../socket";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#74b816",
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
    // width: 320,
    width: "84%",
  },
}));

const Classroomlogin = ({ username }) => {
  const classes = useStyles();
  const history = useHistory();

  const [code, setCode] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  useEffect(() => {
    socket.connect();
  }, []);

  const handleClickJoinSession = (event) => {
    event.preventDefault();
    if (username === "") {
      alert("Please enter a username");
    } else {
      show ? setShow(false) : setShow(true);
    }
  };

  const handleEnterClass = (event) => {
    event.preventDefault();
    if (code === "") {
      alert("Please enter a code!");
    } else {
      alert("joining with " + code);
      socket.emit(
        "joining",
        { roomCode: code, username: username },
        ({ error, user }) => {
          if (error) {
            alert(error);
          } else {
            history.push(`/room/${code}`, { host: false, user: user });
          }
        }
      );
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleClickJoinSession}
      >
        Join a session
      </Button>
      {show ? (
        <div style={{ marginBottom: 10 }}>
          <TextField
            label="Classroom code"
            id="margin-normal"
            name="name"
            className={classes.textField}
            onChange={handleChange}
            style={{ width: "60%" }}
          />

          <Button
            type="submit"
            variant="contained"
            color="default"
            onClick={handleEnterClass}
            style={{
              marginTop: "10px",
              marginLeft: "50px",
              width: "20%",
              backgroundColor: "#d6336c",
              color: "white",
            }}
          >
            Enter
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default Classroomlogin;
