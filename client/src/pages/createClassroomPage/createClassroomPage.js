import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom'
import socket from '../../socket'
import GenerateCodeInput from "./components/generateCode"

const CreateClassroomPage = () => {
    const history = useHistory();
    const location = useLocation();
    const username = location.state.username;

    useEffect(() => {
        socket.connect()
        socket.once('create', roomCode => {
          history.push(`/room/${roomCode}`, {host: true, username: username})
        })
      }, [])

    const handleCreate = () => {
        socket.emit('create', {username: username})
        alert('creating')
    }

    return (
        <GenerateCodeInput handleCreate={handleCreate}>
        </GenerateCodeInput>
    );
}

export default CreateClassroomPage;