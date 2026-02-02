import { Grid, Box, Typography } from "@mui/material";


export default function FeaturesSection({data}) {
  return (
    <Grid container spacing={4} maxWidth="lg" justifyContent="center" sx={{ margin:"auto" }}>
      {data.map((item) => {
        const Icon = item.icon;

        return (
          <Grid size={{ xs: 12, sm: 4, md: 3 }} key={item.id} textAlign="center">
            <Box
              sx={{
                width: 64,
                height: 64,
                mx: "auto",
                mb: 2,
                borderRadius: "50%",
                background: item.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",

                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Icon sx={{ fontSize: 32, color: item.color }} />
            </Box>

            <Typography variant="h6" fontWeight="bold">
              {item.title}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mt: 1, px: 2 }}>
              {item.description}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}
