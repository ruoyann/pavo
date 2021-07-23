import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import socket from "../../../socket";

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

const Classroomlogin = ({ username }) => {
  const classes = useStyles();
  const history = useHistory();

  const [code, setCode] = useState("");

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  useEffect(() => {
    socket.connect();
  }, []);

  const handleEnterClass = (event) => {
    event.preventDefault();
    if (code === "") {
      alert("Please enter a code!");
    }
    if (username === "") {
      alert("Please enter a username");
    } else {
      alert("joining with " + code);
      socket.emit(
        "joining",
        { roomCode: code, username: username },
        ({ error }) => {
          if (error) {
            alert(error);
          } else {
            history.push(`/room/${code}`, { host: false, username: username });
          }
        }
      );
    }
  };

  return (
    <div>
      {/* <Typography variant="h6">
            Enter your classroom code
          </Typography> */}
      <TextField
        label="Classroom code"
        id="margin-normal"
        name="name"
        className={classes.textField}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        color="default"
        className={classes.button}
        onClick={handleEnterClass}
      >
        Enter
      </Button>
    </div>
  );
};

export default Classroomlogin;
