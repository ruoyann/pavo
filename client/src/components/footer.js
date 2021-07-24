import React from "react-dom";
import Typography from "@material-ui/core/Typography";

const Footer = () => {

  return (
    <div className="fixed-bottom" style={{ paddingTop: "70px" }}>
      <Typography variant="body1" align="center" gutterBottom >
        A whiteboard for a fun and interactive classroom experience
      </Typography>
      <Typography variant="body2" align="center">
        🦚 Made for Lifehack 2021 🦚
      </Typography>
    </div>
  );
};

export default Footer;
