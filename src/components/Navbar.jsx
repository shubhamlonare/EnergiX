import Image from "next/image";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Logo from "../../public/logo.svg";

export default function ResponsiveAppBar() {


  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "white", boxShadow: "0 1px 6px rgba(0,0,0,0.08)" }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", margin: 0 }}>

          {/* Logo */}
          <Link href="/">
            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <Image src={Logo} alt="Logo" width={120} height={40} />
            </Box>
          </Link>

          {/* Navigation */}
          <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
            <Link href="#features"><Button sx={navButtonStyle}>Features</Button></Link>
            <Link href="#how-it-works"><Button sx={navButtonStyle}>How It Works</Button></Link>
            <Link href="#benefits"><Button sx={navButtonStyle}>Benefits</Button></Link>

            
              <>
                <Link href="/login">
                  <Button sx={{ ...navButtonStyle, color: "#111827" }}>
                    Login
                  </Button>
                </Link>

                <Link href="/register">
                  <Button
                    variant="contained"
                    sx={{ borderRadius: "10px", textTransform: "none", px: 2.5 }}
                  >
                    Get Started
                  </Button>
                </Link>
              </>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const navButtonStyle = {
  color: "#1976d2",
  textTransform: "none",
  fontWeight: 500,
  fontSize: "15px",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#1e40af",
  },
};
