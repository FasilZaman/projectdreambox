import React from 'react'
import { Container, Paper, Grid } from '@mui/material'
import { Card, CardContent, CardMedia, Typography, Avatar, CardHeader, Button } from '@mui/material'
import './Posts.css'

function Posts() {
    const styles = {
        mt: 3,
        padding: 3,
        mb: 3,
        backgroundColor: 'rgb(249, 255, 255)'
    }
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
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                    <Button size="small"> <b className='button'>Details</b> </Button>
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
                                    <Button size="small"> <b className='button'>Details</b> </Button>
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
                                    <Button size="small"> <b className='button'>Details</b> </Button>
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