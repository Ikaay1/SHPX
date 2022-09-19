import React from 'react';

const Showcase = () => {
    return (
        <>
            <div className='flex justify-center flex-wrap hidden md:flex'>
                <div className=' w-[730px] mr-[2rem]'>
                    <img
                        className='w-[100%]'
                        src='/assets/showcase.png'
                        alt=''
                    />
                </div>
                <div className='w-[350px] pt-[2rem] '>
                    <p className='text-[64px] text-[#4B4B4B] '>Showcase</p>
                    <p className='text-[24px] text-[#737373] mt-[4rem]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        A, eleifend viverra nam libero tellus. Luctus ornare ac,
                        dolor tempor pellentesque nec.
                    </p>
                    <div className='mt-[1.1rem]'>
                        <img src='/assets/left.png' className='inline' alt='' />{' '}
                        <img
                            src='/assets/right.png'
                            className='inline'
                            alt=''
                        />
                    </div>
                </div>
            </div>

            <div className='md:hidden'>
                <div className=' w-[100%]'>
                    <img
                        className='w-[100%]'
                        src='/assets/showcaseSmall.png'
                        alt=''
                    />
                </div>
                <div className=' mt-[1rem]'>
                    <p className='text-[30px] text-[#4B4B4B] '>Showcase</p>
                    <p className='text-[20px] text-[#737373] mt-[.9rem]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        A, eleifend viverra nam libero tellus. Luctus ornare ac,
                        dolor tempor pellentesque nec.
                    </p>
                    <div className='mt-[.5rem]'>
                        <img src='/assets/left.png' className='inline' alt='' />{' '}
                        <img
                            src='/assets/right.png'
                            className='inline'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Showcase;
