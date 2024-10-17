import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createTheme, ThemeProvider} from "@mui/material";
import Mainlayout from "./layouts/Mainlayout.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";



const theme = createTheme({
  palette:{
     primary:{
       main:'#BE3144'
     },
    secondary:{
       main:'#22092C'
    },
    third:{
       main:'#EEF5FF'
    },
    fourth:{
       main:'#EEEEEE'
    }
  } ,
  typography:{
    fontFamily:'Yekan'
  }
});


const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout/>,
        // errorElement:<Errorpage/>,
        // children: [
        //     {
        //         path: '/',
        //         element: <Home/>
        //     }
        //
        //
        //
        //
        // ],

    }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>

        <RouterProvider router={router}>

            <Mainlayout/>
        </RouterProvider>

    </ThemeProvider>

  </StrictMode>,
)
