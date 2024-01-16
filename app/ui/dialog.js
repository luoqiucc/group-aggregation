'use client'

import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import MoreIcon from '@mui/icons-material/More'

export default function ItemDialog(props) {
    const [open, setOpen] = useState(false)
    const { description = '没有提供任何信息' } = props

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Button
                variant="contained"
                startIcon={<MoreIcon />}
                onClick={handleClickOpen}>
                更多信息
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">

                <DialogTitle id="alert-dialog-title">
                    关于该资源
                </DialogTitle>
                <DialogContent dividers>
                    <DialogContentText id="alert-dialog-description">
                        {description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        关闭
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}