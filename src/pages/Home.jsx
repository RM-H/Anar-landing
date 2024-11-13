import {Boxone,Boxtwo,Boxthree,Why,BoxFour} from '../components'

import {useEffect} from "react";

const Home = () => {


    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, []);

    // const scrollto = () => {
    //     document.getElementById('dl').scrollIntoView({behavior: 'smooth', block: 'end'})
    // }
    return (
        <>



            <Boxone/>
            <Boxtwo/>
            <Why/>
            <Boxthree/>
            <BoxFour/>




            <div className='blank'/>


        </>
    )
}
export default Home;