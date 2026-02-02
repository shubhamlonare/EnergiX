"use client";

import Button from "@mui/material/Button";

export default function SubmitButton({ label }) {
  return (
    <Button
      type="submit"
      variant="contained"
      fullWidth
      sx={{ mt: 2, borderRadius: "10px" }}
    >
      {label}
    </Button>
  );
}