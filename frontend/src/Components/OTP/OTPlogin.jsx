import React from 'react'
import { Box, Paper, Container, Grid, TextField, Typography, Button } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import './OTPlogin.css'

function OTPlogin() {
    const navigate = useNavigate()
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
                                
                                <TextField style={{ margin: "20px" }}
                                    required
                                    className='text'
                                    name="mobileNumber"
                                    label="enter Your mobile number"
                                    type="number"
                                    id="password"
                                />
                                <Button style={{ marginLeft: "20px" }}
                                    className='text'
                                    type="submit"
                                    variant="contained"
                                    onClick={()=>{
                                        navigate('/OTP')
                                    }}
                                >
                                    <h3> GET OTP </h3>
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </Container>
        </div>
    )
}

export default OTPlogin