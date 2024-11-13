import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createTheme, ThemeProvider} from "@mui/material";
import Mainlayout from "./layouts/Mainlayout.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'



const theme = createTheme({
    palette: {
        primary: {
            main: '#b20000'
        },
        secondary: {
            main: '#22092C'
        },
        third: {
            main: '#EEF5FF'
        },
        fourth: {
            main: '#EEEEEE'
        }
    },
    typography: {
        fontFamily: 'Anjoman'
    }
});


const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout/>,
        // errorElement:<Errorpage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            } ,
            {
                path:'/about/',
                element:<About/>

            }




        ],

    }

])

createRoot(document.getElementById('root')).render(


        <ThemeProvider theme={theme}>
        <RouterProvider router={router}>


                <Mainlayout/>

        </RouterProvider>
        </ThemeProvider>



)
