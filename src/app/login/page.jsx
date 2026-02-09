import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  Button,
} from "@mui/material";
import NextLink from "next/link";
import BoltIcon from "@mui/icons-material/Bolt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TextInput from "@/components/form/TextInput";
import SubmitButton from "@/components/form/SubmitButton";
import { loginUser } from "./action";



export default function page() {
  const features = [
    "Secure Login",
    "Real-time Monitoring",
    "Smart Billing System",
  ];

  return (
    <Grid container spacing={2} sx={{ height: "100vh" }}>
      {/* LEFT SECTION */}
      <Grid
        size={6}
        sx={{
          bgcolor: "#1e40af",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "90vh",
          }}
        >
          <NextLink href="/" passHref>
            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <BoltIcon sx={{ fontSize: 50, color: "white" }} />
              <Typography variant="h5" fontWeight="bold" color="white">
                EnergiX
              </Typography>
            </Box>
          </NextLink>

          <div style={{ color: "white" }}>
            <Typography variant="h4" fontWeight="bold">
              Welcome Back
            </Typography>
            <Typography fontSize={12}>
              Login to manage your electricity consumption efficiently.
            </Typography>

            <List sx={{ mt: 3 }}>
              {features.map((feature, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemIcon sx={{ minWidth: "30px", color: "white" }}>
                    <CheckCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </div>

          <Typography sx={{ fontSize: "12px", color: "white" }}>
            © 2024 EnergiX. All rights reserved.
          </Typography>
        </div>
      </Grid>

      {/* RIGHT SECTION */}
      <Grid
        size={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Card
          sx={{
            width: "25vw",
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
            },
          }}
        >
          <Box m={3}>
            <Typography
              variant="h6"
              textAlign="center"
              fontWeight="bold"
            >
              Login
            </Typography>
            <Typography fontSize={14} textAlign="center" mb={2}>
              Sign in to your account
            </Typography>

            <form action={loginUser}>
              <TextInput name="email" label="Email" type="email" />
              <TextInput name="password" label="Password" type="password" />

              <Typography
                fontSize="12px"
                textAlign="right"
                sx={{
                  color: "#2563EB",
                  cursor: "pointer",
                  mb: 1,
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Forgot Password?
              </Typography>

              <SubmitButton label="Login" />

              <Typography fontSize="12px" textAlign="center" mt={2}>
                Don’t have an account?{" "}
                <NextLink href="/register" style={{ color: "#2563EB" }}>
                  Register
                </NextLink>
              </Typography>
            </form>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
