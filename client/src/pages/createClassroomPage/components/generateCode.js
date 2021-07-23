import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import React, { useState } from "react";

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

const GenerateCodeInput = ({ handleCreate }) => {
  const classes = useStyles();

  const handleCreateClass = (event) => {
    handleCreate();
  };

  return (
    <div style={{ backgroundColor: "pink" }}>
      <Typography variant="h6">
        Make a classroom code to share with your students
      </Typography>
      <Button
        type="submit"
        variant="contained"
        color="default"
        className={classes.button}
        onClick={handleCreateClass}
      >
        Create classroom
      </Button>
    </div>
  );
};

export default GenerateCodeInput;
