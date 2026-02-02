"use client";

import TextField from "@mui/material/TextField";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { InputAdornment } from "@mui/material";

export default function TextInput({ name, label, type = "text" }) {

    let startIcon = null;

    if (name === "name") startIcon = <PersonOutlineOutlinedIcon />;
    else if (name === "email") startIcon = <MailOutlineOutlinedIcon />;
    else if (name === "phone") startIcon = <LocalPhoneOutlinedIcon />;
    else if (name === "password" || "confirmPassword") startIcon = <LockOutlinedIcon />;

    return (
        <TextField
            fullWidth
            margin="normal"
            name={name}
            label={label}
            type={type}
            variant="outlined"
            size="small"
            required
            slotProps={{
                input: {
                    startAdornment: <InputAdornment position="start">{startIcon}</InputAdornment>,
                },
            }}
        />
    );
}