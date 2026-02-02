import { Typography } from '@mui/material'
import React from 'react'
import MainPageStep from '../MainPageStep'
import MainPageStepsData from '../../data/MainPageStepsData'

export default function HowItWorks() {
    return (
        <div id='how-it-works' style={{marginTop:"150px", marginBottom:"75px"}}>
            <Typography variant='h5' sx={{ textAlign: "center", fontWeight: "bold" }}>How It Works</Typography>
            <Typography sx={{ textAlign: "center", color: "#4B5666" }}>Get started in four simple steps</Typography>
            <MainPageStep data={MainPageStepsData}/>
        </div>
    )
}
