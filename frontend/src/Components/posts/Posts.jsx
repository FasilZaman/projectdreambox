import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Paper, Grid } from '@mui/material'
import { Card, CardContent, CardMedia, Typography, Avatar, CardHeader, Button } from '@mui/material'
import './poststyles/Posts.css'
import { styles } from './poststyles/poststyles'

function Posts() {
    const navigate = useNavigate()
    return (
        <div>
            <Container maxWidth="xl" >
                <Paper sx={styles}>
                    <h4 className='load'>Load more</h4>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
                                            R
                                        </Avatar>
                                    }
                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="2.jpg"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        zaman
                                    </Typography>
                                    {/* <Typography variant="body2" color="text.secondary"> */}
                                    <h4>Base amount : 00000</h4>
                                    <h4>Current bid : 009090</h4>
                                    <h4>user : fasil</h4>
                                    <h4>End date : 09-09-0009</h4>
                                    {/* </Typography> */}
                                    <Button size="small" onClick={() => {
                                        navigate('/details')
                                    }}> <b className='button'>Details</b> </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
                                            R
                                        </Avatar>
                                    }
                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="2.jpg"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        zaman
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                    <Button size="small" onClick={() => {
                                        navigate('/details')
                                    }}> <b className='button'>Details</b> </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
                                            R
                                        </Avatar>
                                    }
                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="2.jpg"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        zaman
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                    <Button size="small" onClick={() => {
                                        navigate('/details')
                                    }}> <b className='button'>Details</b> </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default Posts