import React, { useState, useEffect } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
function Header() {
    const navigate = useNavigate()
    let user = localStorage.getItem("userData")
    console.log(user);
    const [logout, setlogout] = useState()

    const logOut = () => {
        localStorage.removeItem("userData")
        setlogout(true)
    }

    useEffect(() => {
        let user = localStorage.getItem("userData")
        if (!user) {
            navigate('/')
        }
    }, [logout])

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ backgroundColor: 'rgb(238, 255, 255)' }} position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <b className='logo'>
                                Dreambox
                            </b>
                        </Typography>
                        {user ?
                            <div>
                                <Button >
                                    <span className='signup' >{user.userName}</span>
                                </Button>
                                <Button >
                                    <span className='signup' onClick={logOut} > Logout</span>
                                </Button>
                            </div>
                            :
                            <div>
                                <Button onClick={() => {
                                    navigate('userlogin')
                                }} > <span className='signup'> Login </span>
                                </Button>
                                <Button onClick={() => {
                                    navigate('usersignup')
                                }} ><span className='signup' > Signup </span>
                                </Button>
                            </div>}
                    </Toolbar>
                </AppBar>
            </Box>
            <hr />
        </div>
    )
}

export default Header