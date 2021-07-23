import React, { useState } from "react";
import ClassroomLogin from "./components/classroomlogin";
import MakeClassroomButton from "./components/makeClassroomButton";
import UsernameInput from "./components/usernameInput";

import Logo from "./pavo.png";

import { useSound } from "use-sound";
import sound from "./peacockSound.m4a";

const Homepage = () => {
  const [username, setUsername] = useState("");
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [play] = useSound(sound);

  return (
    <div>
      <img
        src={Logo}
        alt="..."
        onClick={play}
        style={{ width: "400px", height: "300px" }}
      />
      <UsernameInput setUsername={setUsername} invalidUsername={invalidUsername} />
      <ClassroomLogin username={username} setInvalidUsername={setInvalidUsername} />
      <MakeClassroomButton username={username} setInvalidUsername={setInvalidUsername} />
    </div>
  );
};

export default Homepage;
