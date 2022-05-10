import React from 'react'
import { Paper, Container } from '@mui/material'
import './Secondheader.css'

function Secondheader(props) {
    const styles = {
        mt: 3,
        padding: 1.5,
        backgroundColor: 'rgb(249, 255, 255)'
    }
    return (
        <div>
            <Container maxWidth="xl" >
                <Paper style={{ alignItems: 'center' }} sx={styles} >
                    <h1 className='header'>{props.title}</h1>
                </Paper>
            </Container>
        </div>
    )
}

export default Secondheader