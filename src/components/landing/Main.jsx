import { Button, Chip, Grid, Typography } from '@mui/material'
import React from 'react'
import Caurosel from '../Caurosel'
import CauroselData from '../../data/CauroselData';

export default function Main() {
    return (
        <Grid container spacing={2} sx={{ height: "70vh", paddingTop: 5 }}>
            <Grid size={6}>
                <div>
                    <Chip label="Smart Energy Management" sx={{
                        backgroundColor: "#dbeafe",
                        color: "#2563eb",
                        fontWeight: "bold",
                    }} />
                </div>
                <div style={{ marginTop: "20px" }}>
                    <Typography variant='h3' sx={{fontWeight:"bold"}}>
                        Smart Electricity Management Made Simple
                    </Typography>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <Typography sx={{color: "#4B5666"}}>
                        Monitor usage, manage bills, and pay online with ease. Take control of your electricity consumption with our advanced dashboard system.
                    </Typography>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <Button variant="contained" sx={{mr:2}}>Get Started</Button>
                    <Button variant="outlined">Login</Button>
                </div>
            </Grid>
            <Grid size={6}>
                    <Caurosel items={CauroselData} />
            </Grid>
        </Grid>
    )
}
