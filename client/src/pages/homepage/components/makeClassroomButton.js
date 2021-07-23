import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";  
import { useHistory } from 'react-router';

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

const MakeClassroomButton = ({username}) => {
    const classes = useStyles();
    const history = useHistory();

    const handleMakeClass = () => {
      if (username === "") {
        alert("Please enter a username");
      } else {
        history.push(`/createClassroom`, {host: true, username: username})
      }
    }


    return (
        <Button
        type="submit"
        variant="contained"
        color="default"
        className={classes.button}
        onClick={handleMakeClass}
        >
            Create classroom
        </Button>
    );
}

export default MakeClassroomButton;