import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "84%",
  },
}));

const Classroomlogin = ({ username, setInvalidUsername }) => {
  const classes = useStyles();
  const history = useHistory();

  const [code, setCode] = useState("");
  const [show, setShow] = useState(false);

  const [invalidRoomcode, setInvalidRoomcode] = useState(false);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  useEffect(() => {
    socket.connect();
  }, []);

  const handleClickJoinSession = (event) => {
    event.preventDefault();
    if (username === "") {
      setInvalidUsername(true)
    } else {
      setInvalidUsername(false)
      setShow(!show)
    }
  };

  const handleEnterClass = (event) => {
    event.preventDefault();
    if (code === "") {
      setInvalidRoomcode(true);
    } else {
      setInvalidRoomcode(false);
      socket.emit(
        "userLogin",
        { roomCode: code.toLowerCase().trim(), username: username },
        ({ error, user }) => {
          if (error) {
            alert(error);
          } else {
            history.push(`/room/${code}`, { isHost: false, user: user });
          }
        }
      );
    }
  };

  return (
    <>
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleClickJoinSession}
      >
        Join a session
      </Button>
      {show ? (
        <div style={{ marginBottom: 10, width: '100%' }}>
          <TextField
            label="Classroom code"
            id="margin-normal"
            name="name"
            className={classes.textField}
            onChange={handleChange}
            style={{ width: "60%" }}
            helperText={invalidRoomcode ? "Please enter a valid classroom code" : ""}
            error={invalidRoomcode}
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
    </>
  );
};

export default Classroomlogin;
