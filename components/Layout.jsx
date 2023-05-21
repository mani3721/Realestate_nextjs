import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './NavBar';
import Footer from './Footer';
import { Profiler } from 'react';


const Layout=({ children })=> {
  const logTimes=(id,phase,actualTime, baseTime,startTime,commitTime)=>{
     console.log(actualTime)
  }
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth='1280px' m='auto'>
        <header>
          <Profiler id='App' onRender={logTimes}>
          <Navbar/>
          </Profiler>
    
        </header>
        <main>{children}</main>
        <footer>
        <Footer/>
        </footer>
      </Box>
    </>
  );
}

export default Layout