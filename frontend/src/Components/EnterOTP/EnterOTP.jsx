import React, { useContext, useEffect, useState } from 'react'
import { Box, Paper, Container, Grid, TextField, Typography, Button } from '@mui/material'
import { UserContext } from '../../Constants/Context'
import { useNavigate } from 'react-router-dom'
import api from '../../Constants/Axios'


function EnterOTP() {
    const navigate = useNavigate()
    const [otp, setOtp] = useState('')
    const [error, setError] = useState('')
    const { user } = useContext(UserContext)
    const [timer, setTimer] = useState(30)
    // const mobileNumber = user.mobileNumber
    user.otp = otp


    let userData = {
        user: true,
        userName: user.userName,
        email: user.email
    }

    useEffect(() => {
        timer > 0 && setTimeout(() => {
            setTimer(timer - 1)
        }
            , 1000
        )
    }, [timer, error])

    const resendotp = () => {
        api.post('/resendotp', user).then((response) => {
            setTimer(30)
        }).catch((err) => {
            console.log(err);
        })
    }

    const Signup = () => {
        if (!otp) {
            setError('enter the otp')
        } else {
            console.log("qwerqwerqwerqwer");
            api.post('/enterSignupOtp', user).then((response) => {
                localStorage.setItem("userData", JSON.stringify(userData))
                navigate('/')
            }).catch((err) => {
                console.log(err);
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
                                <Typography className='loginTypo' variant='h4' align="center" padding="5px" style={{ marginTop: "10vw" }}><b>
                                    Login
                                </b>
                                </Typography>
                                {error && <h5 style={{ color: 'red' }}>{error}</h5>}
                                <TextField style={{ margin: "20px" }}
                                    required
                                    className='text'
                                    name="mobileNumber"
                                    label="Enter recieved OTP"
                                    type="number"
                                    onChange={(e) => {
                                        setOtp(e.target.value)
                                        // console.log(otp);
                                    }}
                                />
                                <Button style={{ marginLeft: "20px" }}
                                    className='text'
                                    type="submit"
                                    variant="contained"
                                    onClick={Signup}
                                >
                                    <h3> Submit </h3>
                                </Button>
                                {timer > 0 ? <p style={{ marginLeft: '28%', marginTop: '5%', color: 'red' }} > resend OTP in: 00:{timer < 10 ? "0" + timer : timer}s</p> : ""}
                                {timer === 0 ? <p style={{ marginLeft: '33%', marginTop: '5%', color: 'red' ,cursor:'pointer' }} className='timer' onClick={resendotp}> Resend OTP</p> : ""}

                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </Container>
        </div>
    )
}

export default EnterOTP