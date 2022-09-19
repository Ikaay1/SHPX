import React from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Showcase from './components/Showcase';

function App() {
    return (
        <>
            <Navbar />
            <div className='mt-[1.1rem] md:mt-[2.4rem]'>
                <Hero />
            </div>
            <div className='mt-[2.1rem] md:mt-[11rem]'>
                <Products />
            </div>
            <div className='mt-[7rem] md:mt-[0rem]'>
                <Showcase />
            </div>
            <div className='mt-[4rem] md:mt-[7rem]'>
                <Footer />
            </div>
        </>
    );
}

export default App;
