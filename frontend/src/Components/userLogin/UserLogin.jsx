import React, { useState, useEffect } from 'react'
import './userLogin.css'
import { Box, Paper, Container, Grid, TextField, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import api from '../../Constants/Axios'

function UserLogin() {
    const navigate = useNavigate()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const data = {
        email,
        password
    }

    useEffect(() => {
        let user = localStorage.getItem("userData")
        if (user) {
            navigate('/')
        }
    }, [navigate])

    const login = () => {
        if (!email || !password) {
            setError("Enter all the details")
        } else {
            api.post('/login', data).then((res) => {
                console.log("loginsuccess");
                let user = true
                let id = res.data.user._id
                let email = res.data.user.email
                let userName = res.data.user.userName
                const userData = {
                    user,
                    id,
                    email,
                    userName
                }
                console.log(userData)
                localStorage.setItem("userData", JSON.stringify(userData))
                navigate('/')
                console.log(res);
            }).catch((err) => {
                console.log(err)
                if (err.response.data.err) {
                    setError(err.response.data.err)
                }
            })
        }
    }

    return (
        <div>
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        pt: 7,
                        '& > :not(style)': {
                            m: 1,
                            width: 1300,
                            height: 600,
                        },
                    }}
                >
                    <Paper elevation={4} >
                        <Grid container>
                            <Grid item xs={12} sm={6.5}>
                                <img src="/DreamboxLogo1.png" alt="" className='Logo' />
                            </Grid>
                            <Grid item xs={12} sm={5.5}>
                                <Typography className='loginTypo' variant='h4' align="center" padding="5px" style={{ marginTop: "7vw" }}><b>
                                    Login
                                </b>
                                </Typography>
                                {error && <h5 style={{ color: 'red', marginLeft: "20px" }}>{error}</h5>}
                                <TextField className='text' style={{ margin: "20px" }}
                                    required
                                    label="Email Address"
                                    type="email"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        console.log(email);
                                    }}
                                />
                                <TextField style={{ margin: "20px" }}
                                    required
                                    className='text'
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        console.log(password);
                                    }}
                                />
                                <Button style={{ marginLeft: "20px" }}
                                    className='text'
                                    type="submit"
                                    variant="contained"
                                    onClick={login}
                                >
                                    <h3> Login </h3>
                                </Button>
                                <Button className='button1'
                                    style={{ marginLeft: "20px" }}
                                    type="submit"
                                    onClick={() => {
                                        navigate('/OTPlogin')
                                    }}
                                >
                                    <h3> Login with OTP </h3>
                                </Button>
                                <Button className='button2'
                                    style={{ marginRight: "20px" }}
                                    type="submit"
                                    onClick={() => {
                                        navigate('/usersignup')
                                    }}
                                >
                                    <h3> Sign Up </h3>
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </Container>
        </div>
    )
}

export default UserLogin