import React, { useState } from 'react';
import { Dialog, DialogActions, IconButton, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { buttonStyle } from '../styles';
import InfoIcon from '@mui/icons-material/Info';
import "../App.css";

const InfoDialog = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Link onClick={handleOpen}>
                <InfoIcon sx={{ ...buttonStyle }} />
            </Link>

            <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { borderRadius: "8px", bgcolor: "#40414f" } }}>
                <DialogActions sx={{ bgcolor: "#40414f", color: "white" }}>
                    <IconButton color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </DialogActions>

                <DialogContent sx={{ bgcolor: "#202123", color: "white", padding: "20px" }}>
                    <h2>Project Name: Gen-Z-AI</h2>
                    <p>Prepared By:</p>
                    <p>Anjan S S</p>
                    <p>Anirudha S P</p>
                </DialogContent>

            </Dialog>
        </div>
    );
};

export default InfoDialog;
