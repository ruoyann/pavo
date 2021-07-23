import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";  

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

const MakeClassroomButton = () => {
    const classes = useStyles();
    const navStyle = {
      color: "white",
      textDecoration: "none",
    };


    return (
      <Link to="/createClassroom" style={navStyle}>
        <Button
        type="submit"
        variant="contained"
        color="default"
        className={classes.button}
        >
            Create classroom
        </Button>
      </Link>
    );
}

export default MakeClassroomButton;