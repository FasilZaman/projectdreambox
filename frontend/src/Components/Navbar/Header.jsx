import React, { useState, useEffect } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { AppBar, Box, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Typographystyle } from './Headerstyle'


function Header() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate()
    let user = localStorage.getItem("userData")
    const [logout, setlogout] = useState()

    const logOut = () => {
        localStorage.removeItem("userData")
        setlogout(true)
    }

    const [userName, setUserName] = useState('')

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("userData"))
        if (!user) {
            navigate('/')
        } else {
            setUserName(user.userName)
        }
    }, [logout, navigate])

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar  sx={{ backgroundColor: 'rgb(238, 255, 255)' }} position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={Typographystyle} onClick={() => {
                            navigate('/')
                        }}>
                            <b className='logo'>
                                Dreambox
                            </b>
                        </Typography>
                        {user ?
                            <div>
                                <Button
                                    onClick={handleClick}
                                >
                                    <span className='signup' >{userName} <ArrowDropDownIcon /> </span>
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My bids</MenuItem>
                                    <MenuItem onClick={handleClose}>My posts</MenuItem>
                                    <MenuItem onClick={() => {
                                        navigate('/sell')
                                    }}>sell</MenuItem>
                                    <hr />
                                    <MenuItem onClick={logOut}>Logout</MenuItem>
                                </Menu>
                            </div>
                            :
                            <div>
                                <Button onClick={() => {
                                    navigate('/userlogin')
                                }} > <span className='signup'> Login </span>
                                </Button>
                                <Button onClick={() => {
                                    navigate('/usersignup')
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