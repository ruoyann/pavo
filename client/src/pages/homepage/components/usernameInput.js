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

const UsernameInput = ({ setUsername }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    socket.connect();
  }, []);

  return (
    <div>
      {/* <Typography variant="h6">Enter your username</Typography> */}
      <TextField
        label="Username"
        id="margin-normal"
        name="name"
        className={classes.textField}
        onChange={handleChange}
      />
    </div>
  );
};

export default UsernameInput;
