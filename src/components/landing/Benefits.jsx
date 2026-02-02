import React from 'react'
import BenefitsData from '../../data/BenefitsData.js'
import BenefitsCard from '../BenefitsCard.jsx'
import { Typography } from '@mui/material'

export default function Benefits() {
    return (
        <div id='benefits' style={{ paddingTop: "75px", marginBottom: "150px", background: "linear-gradient(180deg, #e6efff 0%, #f3f6fb 40%, #ffffff 100%)" }}>
            <Typography variant='h5' sx={{ textAlign: "center", fontWeight: "bold" }}>Why Choose EnergiX</Typography>
            <Typography sx={{ textAlign: "center", color: "#4B5666", mb: 5 }}>Experience the benefits of modern electricity management</Typography>
            <BenefitsCard data={BenefitsData} />
        </div>
    )
}



