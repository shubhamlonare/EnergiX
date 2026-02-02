import { Box, Grid, Typography } from "@mui/material";


export default function StepsSection({data}) {
  return (
 
      <Grid container spacing={2} justifyContent="center" sx={{marginTop: 5}}>
        {data.map((step) => (
          <Grid size={{ xs: 12, sm: 4, md: 3 }} key={step.id} textAlign="center">
            {/* Number circle */}
            <Box
              sx={{
                width: 60,
                height: 60,
                mx: "auto",
                mb: 2,
                borderRadius: "50%",
                background: "#2f64d6",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                fontWeight: "bold",
              }}
            >
              {step.id}
            </Box>

            <Typography variant="h6" fontWeight="bold">
              {step.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 1, px: 2 }}
            >
              {step.description}
            </Typography>
          </Grid>
        ))}
      </Grid>

  );
}
