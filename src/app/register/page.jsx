import React from 'react'
import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Card, } from '@mui/material'
import Image from "next/image";
import NextLink from "next/link";
import Logo from "../../../public/logo.svg";
import BoltIcon from '@mui/icons-material/Bolt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TextInput from '@/components/form/TextInput';
import SubmitButton from '@/components/form/SubmitButton';
import { registerUser } from "../register/action";
import { CheckBox } from '@mui/icons-material';

;

export default function page() {

  const features = [
    "Real-time Monitoring",
    "Digital Billing",
    "Easy Online Payments",
  ];


  return (
    <Grid container spacing={2} sx={{ height: "100vh" }}>
      <Grid size={6} sx={{ bgcolor: "#1e40af", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "90vh" }}>
          <NextLink href="/" passHref>
            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <BoltIcon sx={{ fontSize: 50, color: "white" }} />
              <Typography variant='h5' fontWeight={'bold'} color='white'>EnergiX</Typography>
            </Box>
          </NextLink>
          <div style={{ color: "white" }}>
            <Typography variant='h4' fontWeight={'bold'}>Join EnergiX Today
            </Typography>
            <Typography fontSize={12}>Create your account and start managing your electricity consumption efficiently.</Typography>
            <List sx={{ mt: 3 }}>
              {features.map((feature, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemIcon sx={{ minWidth: '30px', color: 'white' }}>
                    <CheckCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </div>
          <div>
            <Typography sx={{ fontSize: "12px", color: "white" }}>© 2024 EnergiX. All rights reserved.</Typography>
          </div>
        </div>
      </Grid>
      <Grid size={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Card sx={{
          justifyContent: "center", alignItems: "center",
          borderRadius: 2,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)", // subtle, professional shadow
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)", // hover effect
          },
          width: '25vw'
        }}>
          <div style={{ margin: "20px" }}>
            <Typography variant='h6' sx={{ textAlign: "center", fontWeight: 'bold' }}>Create Account</Typography>
            <Typography sx={{ fontSize: 14, textAlign: "center" }}>Register as a new consumer</Typography>
            <form action={registerUser}>
              <TextInput name="name" label="Full Name" />
              <TextInput name="email" label="Email" type="email" />
              <TextInput name="phone" label="Mobile Number" type="number" />
              <TextInput name="password" label="Password" type="password" />
              <TextInput name="confirmPassword" label="Confirm Password" type="password" />
              <div style={{ display: 'flex', alignItems: "center" }}>
                <CheckBox />
                <Typography fontSize="12px">
                  I accept the{" "}
                  <Typography
                    component="span"
                    sx={{
                      color: "#2563EB",
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                      fontSize: '12px'
                    }}
                  >
                    Terms & Conditions
                  </Typography>{" "}
                  and{" "}
                  <Typography
                    component="span"
                    sx={{
                      color: "#2563EB",
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                      fontSize: '12px'
                    }}
                  >
                    Privacy Policy
                  </Typography>
                </Typography>
              </div>
              <SubmitButton label="Create Account" />
             <Typography fontSize="12px" textAlign="center" mt={2}>
  Already have an account?{" "}
  <NextLink href="/login" style={{ textDecoration: "none" }}>
    <Typography
      component="span"
      sx={{
        color: "#2563EB",
        cursor: "pointer",
        fontSize: "12px",
        "&:hover": { textDecoration: "underline" },
      }}
    >
      Login
    </Typography>
  </NextLink>
</Typography>
            </form>
          </div>

        </Card>
      </Grid>
    </Grid>
  )
}
