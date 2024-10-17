
import {Outlet} from 'react-router-dom'
import {Nav} from '../components/index.js'

const Mainlayout = () => {











    return (
        <>
            <Nav/>


            <main>
                {/*<Cursor/>*/}


                <Outlet/>


            </main>

            {/*<Footer/>*/}






        </>
    )
}
export default Mainlayout;