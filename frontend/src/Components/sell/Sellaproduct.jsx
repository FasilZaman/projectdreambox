import { Grid, TextField, Container } from '@mui/material';
import React from 'react'
import './Sellaproduct.css'
import { textboxStyle, textboxStyle1, descriptionTextbox } from './Sellaproductstyle'

function Sellaproduct() {
    return (
        <div>
            <div className='textdiv'>
                <h2 className='sellHeader'>SELL YOUR ITEMS</h2>
            </div>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <TextField className='text'
                            required
                            label="Name"
                            style={textboxStyle1}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField className='text'
                            required
                            label="Type"
                            style={textboxStyle1}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField className='text'
                            required
                            label="Base amount"
                            style={textboxStyle}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField className='text'
                            required
                            label="village"
                            style={textboxStyle}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField className='text'
                            required
                            label="post"
                            style={textboxStyle}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField className='text'
                            required
                            label="district"
                            style={textboxStyle}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField className='text'
                            required
                            label="Item description"
                            multiline
                            rows={4}
                            style={descriptionTextbox}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Sellaproduct