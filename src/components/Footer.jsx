import React from 'react';

const Footer = () => {
    return (
        <div className='pt-[2.5rem] pb-[2.2rem] px-[1.9rem] quotation'>
            <p className='text-[#4B4B4B] text-[30px] '>
                Get your quotation today
            </p>
            <div className='md:flex mt-[1.5rem]'>
                <p className='mb-[.3rem] md:mb-[0rem] md:mr-[1rem] bg-[#4B4B4B] w-[175px] h-[50px] flex justify-center items-center text-white'>
                    Quote me
                </p>
                <p className='bg-[#FFFFFF] text-[#4B4B4B] w-[175px] h-[50px] flex justify-center items-center'>
                    Contact Sales
                </p>
            </div>
        </div>
    );
};

export default Footer;
