"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment,
  Card,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Mail, Lock, Zap } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#2563EB" },
          background: {
            default: mode === "light" ? "#F8FAFC" : "#121212",
            paper: mode === "light" ? "#ffffff" : "#1E1E1E",
          },
        },
        shape: { borderRadius: 12 },
        typography: {
          fontFamily: "Inter, sans-serif",
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Grid container minHeight="100vh">
        {/* ================= LEFT SECTION ================= */}
        <Grid
          item
          lg={6}
          display={{ xs: "none", lg: "flex" }}
          flexDirection="column"
          justifyContent="space-between"
          px={{ lg: 6, xl: 10 }}
          py={{ lg: 8, xl: 10 }}
          sx={{
            background: "linear-gradient(135deg, #2563EB, #1E40AF)",
            color: "#fff",
          }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Zap />
            <Typography variant="h5" fontWeight="bold">
              EnergiX
            </Typography>
          </Box>

          <Box maxWidth={520}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Welcome Back
            </Typography>
            <Typography sx={{ opacity: 0.9, mb: 4 }}>
              Login to manage your electricity usage, bills, and payments with
              ease.
            </Typography>

            {[
              "Secure Login",
              "Real-time Consumption",
              "Smart Billing System",
            ].map((text) => (
              <Typography key={text} sx={{ mb: 1.2 }}>
                ✔ {text}
              </Typography>
            ))}
          </Box>

          <Typography variant="caption">
            © 2024 EnergiX. All rights reserved.
          </Typography>
        </Grid>

        {/* ================= RIGHT SECTION ================= */}
        <Grid
          item
          xs={12}
          lg={6}
          minHeight="100vh"
          display="flex"
          justifyContent="center"
           mx={"auto"}
          alignItems="center"
          px={{ xs: 2, sm: 4, md: 6 }}
        >
          {/* ================= CARD ================= */}
          <Card
            sx={{
              width: "100%",
              maxWidth: 480,
              p: { xs: 3, sm: 4 },
              borderRadius: 4,
              mt: 4,
              boxShadow:
                mode === "light"
                  ? "0 12px 32px rgba(0,0,0,0.12)"
                  : "0 12px 32px rgba(0,0,0,0.6)",
              mx: "auto",
            }}
          >
            {/* Header */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={3}
            >
              <Typography fontWeight="bold">Login</Typography>

              <IconButton
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? <Brightness4 /> : <Brightness7 />}
              </IconButton>
            </Box>

            {/* Title */}
            <Typography variant="h5" fontWeight="bold">
              Sign in to EnergiX
            </Typography>
            <Typography color="text.secondary" mb={3}>
              Enter your credentials to continue
            </Typography>

            {/* Form */}
            <Box component="form">
              <TextField
                fullWidth
                label="Email Address"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Mail size={18} />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                type="password"
                label="Password"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock size={18} />
                    </InputAdornment>
                  ),
                }}
              />

              <Box textAlign="right" mt={1}>
                <Button variant="text" size="small" onClick={()=>router.push('/forgotPassword')}>
                  Forgot Password?
                </Button>
              </Box>

              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{ mt: 2 }}
              >
                Login
              </Button>
            </Box>

            <Typography align="center" mt={3}>
              Don’t have an account?{" "}
              <Button
                variant="text"
                onClick={() => router.push("/register")}
              >
                Register
              </Button>
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
