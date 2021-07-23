import React, { useState } from "react";
import ClassroomLogin from "./components/classroomlogin";
import MakeClassroomButton from "./components/makeClassroomButton";
import Typography from "@material-ui/core/Typography";
import UsernameInput from "./components/usernameInput";
import Footer from "../../components/footer";

import Logo from "../../assets/pavo_logo.svg";

import { useSound } from "use-sound";
import sound from "../../assets/peacockSound.m4a";

const Homepage = () => {
  const [username, setUsername] = useState("");
  const [play] = useSound(sound);
  return (
    <div>
      <img
        src={Logo}
        alt="..."
        onClick={play}
        style={{ width: "400px", height: "300px" }}
      />
      <UsernameInput setUsername={setUsername} />
      <ClassroomLogin username={username} />
      {/* <Typography variant="h6">or</Typography> */}
      <MakeClassroomButton username={username} />
      <Footer />
    </div>
  );
};

export default Homepage;
