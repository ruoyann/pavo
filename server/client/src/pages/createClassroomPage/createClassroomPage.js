import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import socket from '../../socket'
import GenerateCodeInput from "./components/generateCode"

const CreateClassroomPage = () => {
    const [ code, setCode ] = useState("");
    const history = useHistory();

    useEffect(() => {
        socket.connect()
        socket.once('create', roomCode => {
          history.push(`/room/${roomCode}`)
        })
      }, [])

    const handleCreate = () => {
        socket.emit('create')
        alert('creating')
    }

    return (
        <GenerateCodeInput code={code} setCode={setCode} handleCreate={handleCreate}>
        </GenerateCodeInput>
    );
}

export default CreateClassroomPage;