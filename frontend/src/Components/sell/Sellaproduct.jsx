import { Grid, TextField, Container, Button } from '@mui/material';
import React, { useState } from 'react'
import './Sellaproduct.css'
import { textboxStyle, textboxStyle1, descriptionTextbox, imageStyle, submitButton } from './Sellaproductstyle'
import { today } from './date'
import api from '../../Constants/Axios'


function Sellaproduct() {

    const initialValues = {
        name: '',
        type: '',
        baseAmount: '',
        address: '',
        endDate: '',
        description: ''
    }

    const [formValues, setFormValues] = useState(initialValues)
    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()
    const [image3, setImage3] = useState()
    const [image4, setImage4] = useState()
    const [error, setError] = useState()
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

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = () => {
        try {
            if (!image1 || !image2 || !image3 || !image4 || !formValues.name || !formValues.type || !formValues.baseAmount || !formValues.address
                || !formValues.endDate || !formValues.description) {
                console.log("adadada");
                setError('enter all the informations')
            } else {
                let data = new FormData()
                console.log('any');
                data.append("image1", image1)
                // data.append("image2", image2)
                // data.append("image3", image3)
                // data.append("image4", image4)

                
                data.append('data', JSON.stringify(formValues))
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
                console.log(formValues);
                console.log(data);
                api.post('/addbid', data, config).then((response) => {
                    console.log(response);
                }).catch(() => {
                    console.log('err');
                })

            }
        } catch {
            console.log('error occured');
        }
    }


    return (
        <div>
            <div className='textdiv'>
                <h2 className='sellHeader'>SELL YOUR ITEMS</h2>
            </div>
            <Container>
                {error && <h4 style={{ color: 'red' }}>{error}</h4>}
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <TextField className='text'
                            required
                            label="Name"
                            style={textboxStyle1}
                            name='name'
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField className='text'
                            required
                            label="Type"
                            style={textboxStyle1}
                            name='type'
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField className='text'
                            required
                            label="Base amount"
                            style={textboxStyle}
                            name='baseAmount'
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField className='text'
                            required
                            label="address/city"
                            style={textboxStyle}
                            name='address'
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField className='text'
                            required
                            label="mobile"
                            style={textboxStyle}
                            name='mobile'
                            onChange={handleChange}
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
                            name='endDate'
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField className='text'
                            required
                            label="Item description"
                            multiline
                            rows={4}
                            style={descriptionTextbox}
                            name='description'
                            onChange={handleChange}
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
                        <Button className='button' variant="contained" color="success" style={submitButton} onClick={handleSubmit}>
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