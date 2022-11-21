
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Footer from '../component/Footer'
import Features from '../component/Features'
import Newsletter from '../component/Newsletter'
import styles from '../styles/Home.module.css'
import { Divider } from '@mui/material'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <br/>
    <Divider/>
    <br/>
    <Features/>
    <Newsletter/>
    <Footer/>
    

    </>
    
  )
}

export default Home
