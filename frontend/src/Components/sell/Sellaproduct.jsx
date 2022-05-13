import { Grid, TextField, Container, Button } from '@mui/material';
import React, { useState } from 'react'
import './Sellaproduct.css'
import { textboxStyle, textboxStyle1, descriptionTextbox, imageStyle, submitButton } from './Sellaproductstyle'

function Sellaproduct() {
    const date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    if (month < 10) month = '0' + month.toString();
    if (day < 10) day = '0' + day.toString();
    let today = year + '-' + month + '-' + day;


    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()
    const [image3, setImage3] = useState()
    const [image4, setImage4] = useState()
    const handleImage1 = (e) => {
        setImage1(e.target.files[0])

    }
    const handleImage2 = (e) => {
        setImage2(e.target.files[0])

    }
    const handleImage3 = (e) => {
        setImage3(e.target.files[0])

    }
    const handleImage4 = (e) => {
        setImage4(e.target.files[0])

    } 

    console.log(date);
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
                            label="village/post"
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
                    <Grid item xs={12} sm={6}>
                        <TextField className='text'
                            required
                            label="end date"
                            type="date"
                            defaultValue={today}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                min: "2022-05-13"
                            }}
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
                    <Grid style={imageStyle} sm={6} >
                        <label>image1</label>  <br />
                        <input type='file' name='logo' onChange={handleImage1} />
                    </Grid>
                    <Grid style={imageStyle} sm={5} >
                        <label>image2</label>  <br />
                        <input type='file' name='logo' onChange={handleImage2} />
                    </Grid>
                    <Grid style={imageStyle} sm={6}>
                        <label>image3</label>  <br />
                        <input type='file' name='logo' onChange={handleImage3} />
                    </Grid>
                    <Grid style={imageStyle} sm={5}>
                        <label>image4</label>  <br />
                        <input type='file' name='logo' onChange={handleImage4} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button className='button' variant="contained" color="success" style={submitButton} >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            {/* <DatePicker onChange={setTimepickerDate}  value={timepickerdate} /> */}
            {/* minDate={{Date: new Date()}} */}
        </div>
    )
}

export default Sellaproduct