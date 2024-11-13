
import {Outlet} from 'react-router-dom'
import {Nav,Footer} from '../components/index.js'
import {Fab} from "@mui/material";
import {KeyboardArrowUp} from '@mui/icons-material'
import {useState} from "react";

const Mainlayout = () => {



const [showFAB,setShowFAB] = useState(false)





    window.addEventListener('scroll', ()=>{
        if (window.scrollY>500) {
            setShowFAB(true)
        }else {
            setShowFAB(false)
        }
    });







    return (
        <>
            <Nav/>


            <main  >




                <Outlet/>


                <Fab onClick={() => {
                    window.scrollTo({top: 0, behavior: 'smooth'})
                }} size='small' className={`is-position-fixed ${showFAB==false && ('is-hidden')} ` } color="secondary" aria-label="add" sx={{top:'90%' , left:'90%'}}>
                    <KeyboardArrowUp/>
                </Fab>

            </main>

            <Footer/>






        </>
    )
}
export default Mainlayout;