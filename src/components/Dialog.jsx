

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {Download,Close} from '@mui/icons-material'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide  direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button className='is-size-6 borderradone ' variant="contained" color='third' onClick={handleClickOpen}>
                <Download/>
                دریافت اپلیکیشن
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                transitionDuration={600}
                keepMounted
                onClose={handleClose}
                fullWidth
                aria-describedby="alert-dialog-slide-description"
                sx={{'& .MuiDialog-container':{flexDirection:'column', justifyContent:'flex-end'},'& .MuiDialog-paper':{m:0 , width:1}  }}
            >
                <DialogTitle>انتخاب کنید :
                    <Close onClick={handleClose} className='is-float-left is-size-3'  />
                </DialogTitle>



                <div className='is-flex is-flex-direction-column is-align-items-center py-5  '>

                        <img className='downloadbutton my-1 borderradtwo ' src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/bazaar.png"
                             alt=""/>



                        <img className='downloadbutton my-1 borderradtwo'
                            src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/direct-download-badge.png"
                            alt=""/>



                        <img className='downloadbutton my-1 borderradtwo' src="https://web-cdn.snapp.ir/snappir-marketing/app/myketmarket.png" alt=""/>

                    <Button variant='contained' color='secondary' className='my-1 downloadbutton is-size-6' sx={{borderRadius:'1rem'}}>

                       وب اپلیکیشن
                        (IOS)
                    </Button>


                </div>

            </Dialog>
        </React.Fragment>
    );
}