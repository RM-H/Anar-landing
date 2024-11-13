
import {Link} from 'react-router-dom'

import {
     Button,

} from "@mui/material";


const Navbar = () => {

    const scrollto = () => {
     document.getElementById('dl').scrollIntoView({behavior:'smooth' , block:'end'})
    }





    return (
        <>
            <header>


                <nav className="navbar " role="navigation" aria-label="main navigation" >






                    <div className='columns is-flex w100  m-0 mx-auto  container  is-justify-content-space-between'>
                        <div className='column  is-2-desktop is-12-mobile   '>

                            <div className={`dropdown  is-hidden-desktop w100  is-flex is-align-items-center is-justify-content-center has-text-centered`}>

                                <Link to='/' >

                                    <img src="/asset/images/logo-red.webp" className='logo-mobile  ' alt="logo"/>
                                </Link>

                            </div>



                            <Link to='/' className='is-hidden-mobile '>

                                <img src="/asset/images/logo-red.webp" className='logo  ' alt="logo"/>
                            </Link>


                        </div>

                        <div
                            className='column is-hidden-mobile is-12-mobile is-12-desktop is-flex-desktop is-align-items-center  '>

                            <div id="navbarBasicExample" className="navbar-menu  ">
                                <div className="navbar-start ">

                                    <Link to='/' className="navbar-item has-text-black   ">
                                        خانه
                                    </Link>



                                    <Link to='/about/' className="navbar-item  has-text-black">
                                        درباره
                                        <strong className='clronetext'>
                                            انار
                                        </strong>

                                        مارکت
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