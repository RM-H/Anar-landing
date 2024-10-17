import {Search, Menu} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {
    Box, Divider, Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [show, setshow] = useState(false)
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: '12rem' }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <Link to='/' className="navbar-item  ">
                    خانه
                </Link>

                <Link to='/projects/' className="navbar-item ">
                    پروژه‌ها
                </Link>

                <Link to='/invoice/' className="navbar-item ">
                    برآورد هزینه
                </Link>

                <Link to='/blogs/' className="navbar-item ">
                    وبلاگ
                </Link>

                <Link to='/masters/' className="navbar-item ">
                    استدادکاران
                </Link>

                <Link to='/about/' className="navbar-item ">
                    درباره ما
                </Link>

                <Link to='/contact/' className="navbar-item ">
                    تماس با ما
                </Link>
            </List>

        </Box>
    );



    return (
        <>
            <header>


                <nav className="navbar" role="navigation" aria-label="main navigation">


                    <Drawer anchor='right'  open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>



                    <div className='columns w100  m-0'>
                        <div className='column  is-2  '>

                            <div className={`dropdown  is-hidden-desktop w100 is-flex is-align-items-center is-justify-content-space-between `}>
                                <div className="dropdown-trigger    ">
                                    <button onClick={toggleDrawer(true)} className="button bgclrthree has-text-white "
                                            aria-haspopup="true" aria-controls="dropdown-menu2">
                                        <Menu/>


                                    </button>


                                </div>
                                <Link to='/' >

                                    <img src="/asset/images/logo-white.webp" className='logo  ' alt="logo"/>
                                </Link>

                            </div>


                            <Link to='/' className='is-hidden-mobile '>

                                <img src="/asset/images/logo-white.webp" className='logo  ' alt="logo"/>
                            </Link>


                        </div>

                        <div
                            className='column is-hidden-mobile is-12-mobile is-8 is-flex-desktop is-align-items-center  '>

                            <div id="navbarBasicExample" className="navbar-menu  ">
                                <div className="navbar-start mx-auto is">

                                    <Link to='/' className="navbar-item textclrone ">
                                        خانه
                                    </Link>



                                    <Link to='/about/' className="navbar-item textclrone">
                                        درباره ما
                                    </Link>

                                    <Link to='/contact/' className="navbar-item textclrone">
                                        تماس با ما
                                    </Link>


                                </div>
                            </div>

                        </div>




                    </div>


                </nav>
            </header>


        </>
    )
}
export default Navbar;