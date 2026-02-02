import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'



export default function Features({ data }) {

    return (
        <Grid container spacing={2} sx={{ marginTop: 5 }}>
            {data.map((item) => {
                const Icon = item.icon;

                return (
                    <Grid  size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                        <Card sx={{
                            border: "1px solid #eeeeee", borderRadius: "16px", p: 2, border: "1px solid #eeeeee",
                            borderRadius: "16px",
                            p: 2,
                            transition: "all 0.3s ease",
                            cursor: "pointer",

                            "&:hover": {
                                boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                                transform: "translateY(-6px)",
                                borderColor: "#d0d7e2",
                            },
                        }}>
                            <CardContent>
                                <Box sx={{ mb: 2 }}>
                                    <Icon sx={{ fontSize: 50, color: "primary.main" }} />
                                </Box>

                                <Typography variant="h6" fontWeight="bold">
                                    {item.name}
                                </Typography>

                                <Typography color="text.secondary" sx={{ mt: 1 }}>
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    )
}
