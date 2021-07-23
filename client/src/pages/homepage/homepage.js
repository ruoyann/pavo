import React, { useState } from "react";
import ClassroomLogin from "./components/classroomlogin";
import MakeClassroomButton from "./components/makeClassroomButton";
import UsernameInput from "./components/usernameInput";
import Footer from "../../components/footer";

import Logo from "../../assets/pavo_logo.svg";

import { useSound } from "use-sound";
import sound from "../../assets/peacockSound.m4a";

const Homepage = () => {
  const [username, setUsername] = useState("");
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [play] = useSound(sound);

  const handleScream = (e) => {
    if (e.detail === 5) {
      play();
    }
  }

  return (
    <div>
      <img
        src={Logo}
        alt="Peacock!"
        onClick={(e) => handleScream(e)}
        style={{ width: "400px", height: "300px" }}
      />
      <UsernameInput setUsername={setUsername} invalidUsername={invalidUsername} />
      <ClassroomLogin username={username} setInvalidUsername={setInvalidUsername} />
      <MakeClassroomButton username={username} setInvalidUsername={setInvalidUsername} />
      <Footer />
    </div>
  );
};

export default Homepage;
