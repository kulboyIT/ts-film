import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material'
import React, { Dispatch, useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

interface LoginProps {
    isOpen: boolean
    handleClose: Dispatch<React.SetStateAction<boolean>>
}

const Login = ({isOpen, handleClose} : LoginProps) => {


    //context
    const {toggleAuth} = useContext(AuthContext)

    //state
    const [username, setUsername] = useState('')

    const onUsernameChange = (event: { target: { value: React.SetStateAction<string> } }) => setUsername(event.target.value)

    const onLoginSubmit = () => {
        toggleAuth(username)
        setUsername('')
        handleClose(false)
    }
    return (
        <Dialog open = {isOpen} onClose={handleClose.bind(this, false)}>
            <DialogContent>
                 <TextField inputProps={{style: {color: "black"}}} label="Username" onChange={onUsernameChange} value={username} required />
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="contained" onClick={onLoginSubmit} disabled={username === ''} >Login</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Login
