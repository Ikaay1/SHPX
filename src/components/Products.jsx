import React from 'react';
import {products} from '../data';

const Products = () => {
    const displayProduct = (product) => {
        return (
            <div className='px-[2rem] pt-[2rem] mr-[2rem] mb-[7rem] w-[350px] h-[380px] products'>
                <p className='text-[26px]'>Chaise Molle</p>
                <p className='text-[20px]'>$18.00</p>
                <div className='mt-[1.7rem] translate-y-[10%] flex justify-center items-center'>
                    <img src={product} alt='' />
                </div>
            </div>
        );
    };
    return (
        <>
            <div className='md:hidden'>
                <div className='flex justify-between items-center'>
                    <p className='text-[30px]'>Products</p>
                    <p className='text-[20px]'>
                        All{' '}
                        <img
                            src='/assets/arrow.png'
                            className='inline'
                            alt=''
                        />{' '}
                    </p>
                </div>
                <div className='px-[2rem] pt-[2rem] w-[90%] mt-[1.5rem] mx-[auto] products'>
                    <p className='text-[26px]'>Chaise Molle</p>
                    <p className='text-[20px]'>$18.00</p>
                    <div className='mt-[1.7rem] translate-y-[10%] flex justify-center items-center'>
                        <img src='/assets/basket.png' alt='' />
                    </div>
                </div>
            </div>

            <div className='hidden md:block'>
                <div>
                    <p className='text-[30px]'>Products</p>
                </div>
                <div className='flex justify-center bar text-[24px] font-medium mt-[2rem]'>
                    <p className='text-black mr-[2.65rem]'>All</p>
                    <p className='mr-[2.65rem]'>Lamp</p>
                    <p className='mr-[2.65rem]'>Chair</p>
                    <p className='mr-[2.65rem]'>Table</p>
                    <p>Sofa</p>
                </div>
                <div className='flex justify-center mt-[4rem] flex-wrap'>
                    {products.map((product) => (
                        <div key={product}>{displayProduct(product)}</div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Products;
