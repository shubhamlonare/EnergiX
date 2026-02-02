import React from 'react'
import Navbar from '../../components/Navbar'
import Main from '@/components/landing/Main'
import Features from '@/components/landing/Features'
import HowItWorks from '@/components/landing/HowItWorks'
import Benefits from '@/components/landing/Benefits'
import { Container } from '@mui/material'

export default function Home() {
    return (
        <>
            <Navbar />
            <Container maxWidth="lg">
                <Main />
                <Features />
                <HowItWorks />
            </Container>
                <Benefits />
        </>
    )
}
