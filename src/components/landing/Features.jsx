import { Typography } from '@mui/material'
import FeatureCardData from '../../data/FeatureCardData.js'
import React from 'react'
import FeatureCard from '@/components/FeatureCard.jsx'

export default function Features() {
    return (
        <div id="features">
            <Typography variant='h5' sx={{textAlign: "center", fontWeight: "bold"}}>Powerful Features</Typography>
            <Typography sx={{textAlign: "center", color: "#4B5666"}}>Everything you need to manage your electricity efficiently in one platform</Typography>
            <FeatureCard data={FeatureCardData} />
        </div>
    )
}
