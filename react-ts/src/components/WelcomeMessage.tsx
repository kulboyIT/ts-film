import React from 'react'
import Box from '@mui/material/Box'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

interface WelcomeMessageProps {
    position: string
    country?: string
}

const WelcomeMessage = ({position, country="Vietnam"} : WelcomeMessageProps) => {

    const {authInfo: {username}} = useContext(AuthContext)

    return (
        <Box mb={1}>
            Welcome {username} - {position} from {country}
        </Box>
    )
}

export default WelcomeMessage
