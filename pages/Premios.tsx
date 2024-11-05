import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PgPremios from '@/components/subcomponents/PgPremios';
import React from 'react';

export default function Premios() {
    return (
        <>
            <Navbar />
            <section id='awards' className='bannerPremio py-32 relative top-[59px]'>
                <div className='maxWidth'>
                    <h1 className="font-teko text-7xl mt-4 uppercase text-center lg:tracking-wider lg:text-8xl text-white">Brotas Beer - Nossas conquistas</h1>
                </div>
            </section>

            <div className='background_h1 relative top-[59px] py-10'>
                <h1 className='font-teko text-7xl text-center uppercase lg:tracking-wider lg:text-8xl text-black'>Premiações</h1>
                <img className='mx-auto' src="slidegreen.png" alt="" />
                <PgPremios />
            </div>
            <div className='relative top-[59px]'>
                <Footer />
            </div>
        </>
    );
}