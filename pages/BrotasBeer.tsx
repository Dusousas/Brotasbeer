import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import GaleriaPub from '@/components/subcomponents/GaleriaPub';

import React from 'react';

export default function BrotasBeer() {
  return (
    <>
      <Navbar />
      <section id='pub' className='bannerPub py-32 relative top-[59px]'>
        <div className='maxWidth'>
          <h1 className="font-teko text-7xl mt-4 uppercase text-center lg:tracking-wider lg:text-8xl text-white">Brotas Beer - PUB</h1>
        </div>
      </section>

      <div className='relative top-[59px] py-20'>
        <h1 className='font-teko text-white  text-7xl text-center uppercase lg:tracking-wider lg:text-8xl '>PUB</h1>
        <img className='mx-auto ' src="slidemain.png" alt="" />
        <GaleriaPub />
      </div>
      <Footer />
    </>
  );
}