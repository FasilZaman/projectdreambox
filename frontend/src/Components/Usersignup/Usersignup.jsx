import './Usersignup.css'
import React, { useState, useEffect, useContext } from 'react'
import { Box, Paper, Container, Grid, TextField, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import api from '../../Constants/Axios'
import { UserContext } from '../../Constants/Context'

function Usersignup() {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [mobileNumber, setMobileNumber] = useState()
    const [error, setError] = useState()

    const data = {
        userName,
        email,
        password,
        mobileNumber,
        action: 'signup'
    }

    useEffect(() => {
        let user = localStorage.getItem("userData")
        if (user) {
            navigate('/')
        }
    }, [navigate])

    const Signup = () => {
        setUser(data)
        if (!userName || !email || !password || !confirmPassword || !mobileNumber) {
            setError('Enter all the details')
        } else if (password.length < 6) {
            setError('Enter minimum 6 characters for password')
        } else if (password !== confirmPassword) {
            setError('passwords should be equal')
        } else {
            api.post(`/signupotp`, data).then((res) => {
                navigate('/OTP')
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

                        },
                    }}
                >
                    <Paper elevation={4} >
                        <Grid container>
                            <Grid item xs={12} sm={6.5}>
                                <img src="/DreamboxLogo1.png" alt="" className='Logo' />
                            </Grid>
                            <Grid item xs={12} sm={5.5}>
                                <Typography className='loginTypo' variant='h4' align="center" style={{ marginTop: "5vw", marginBottom: "1vw" }} ><b>
                                    Signup
                                </b>
                                </Typography>
                                {error && <h5 style={{ color: 'red' }}>{error}</h5>}
                                <TextField className='text' style={{ margin: "5px" }}
                                    required
                                    label="Email Address"
                                    type="email"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                                <TextField className='text' style={{ margin: "5px" }}
                                    required
                                    label="User name"
                                    type="text"
                                    onChange={(e) => {
                                        setUserName(e.target.value)
                                        // console.log(e.target.value)
                                    }}
                                />
                                <TextField style={{ margin: "5px" }}
                                    required
                                    className='text'
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        // console.log(e.target.value)
                                    }}
                                />
                                <TextField style={{ margin: "5px" }}
                                    required
                                    className='text'
                                    name="password"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value)
                                        // console.log(e.target.value)
                                    }}
                                />
                                <TextField style={{ margin: "5px" }}
                                    required
                                    className='text'
                                    name="password"
                                    label="mobilenumber"
                                    type="number"
                                    id="mobile"
                                    onChange={(e) => {
                                        setMobileNumber(e.target.value)
                                        // console.log(e.target.value)
                                    }}
                                />
                                <Button style={{ marginLeft: "5px" }}
                                    className='text'
                                    type="submit"
                                    variant="contained"
                                    onClick={Signup}
                                >
                                    <h3> Signup </h3>
                                </Button>

                                <Button className='button2'
                                    style={{ marginRight: "30px", marginBottom: "5vw" }}
                                    type="submit"
                                    onClick={() => {
                                        navigate('/userlogin')
                                    }}
                                >   <h6 style={{ marginTop: "5px" }} >Already have an account</h6>
                                    <h3> Login </h3>
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </Container>
        </div>
    )
}

export default Usersignup