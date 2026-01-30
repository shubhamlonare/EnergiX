'use client';

import * as React from 'react';
import Image from "next/image";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../../public/logo.svg';

import '../app/globals.css';
import { useRouter } from 'next/navigation';

function ResponsiveAppBar() {
    const router = useRouter();

    const handleSubmit = ()=>{
router.push("/register");
    }

    return (
        <AppBar position="static" sx={{ bgcolor: "white" }}>
            <Container maxWidth="lg">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

                    {/* Left: Logo */}
                    <Image src={Logo} alt="Logo" width={120} height={40} />

                    {/* Right: Tabs + Button */}
                    <Box sx={{ display: "flex", gap: 2, }}>
                        <Button>Features</Button>
                        <Button>How It Works</Button>
                        <Button>Benefits</Button>
                        <Button onClick={()=>router.push('/login')}>Login</Button>

                        <Button variant="contained" color="primary" sx={{borderRadius: "10px"}} onClick={handleSubmit} >
                            Get Started
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
