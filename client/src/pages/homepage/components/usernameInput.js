import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
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
    width: "100%",
  },
}));

const UsernameInput = ({ setUsername, invalidUsername }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    socket.connect();
  }, []);

  return (
    <div>
      <TextField
        label="Username"
        id="margin-normal"
        name="name"
        className={classes.textField}
        onChange={handleChange}
        helperText={invalidUsername ? "Please enter a username" : ""}
        error={invalidUsername}
      />
    </div>
  );
};

export default UsernameInput;
