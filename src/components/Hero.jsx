import React from 'react';

const Hero = () => {
    return (
        <div className='relative overflow-hidden'>
            <div className='sm:h-[370px] md:h-[570px] translate-x-[20%] md:translate-x-[9%] object-cover'>
                <img
                    className='w-[100%] h-[100%]] md:hidden'
                    src='/assets/interior.png'
                    alt=''
                />
                <img
                    className='w-[100%] h-[100%]] hidden md:block'
                    src='/assets/interiorLarge.png'
                    alt=''
                />
            </div>

            <div className='absolute top-[50%] translate-y-[-50%] left-0 w-[64%] interior pt-[2.5rem] pb-[2rem] md:top-[100%] md:translate-y-[-100%] md:w-[250px] md:pt-[4rem]'>
                <p className='text-[#4B4B4B] text-[30px] mb-[2rem] leading-[100%] '>
                    Modern Interior for your Dream House
                </p>
                <p className='text-[#737373] text-[11.5px]'>
                    We custom make design to suits your needs.
                </p>
            </div>
        </div>
    );
};

export default Hero;
