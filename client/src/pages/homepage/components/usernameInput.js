import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import socket from "../../../socket";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
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
      <TextField
        label="Username"
        id="margin-normal"
        name="name"
        className={classes.textField}
        onChange={handleChange}
        helperText={invalidUsername ? "Please enter a username" : ""}
        error={invalidUsername}
      />
  );
};

export default UsernameInput;
