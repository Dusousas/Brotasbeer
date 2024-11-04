import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import GaleriaFabrica from '@/components/subcomponents/GaleriaFabrica';
import Timeline from '@/components/subcomponents/Timeline';
import React from 'react';

export default function cervejaria() {
  return (
    <>

      <Navbar />
      <section id='about' className=''>
        <div className='relative top-[59px]'>
          <Timeline />
        </div>

        {/* TIMELINE */}
        <div className='relative top-[59px]'>
          <GaleriaFabrica />
        </div>
      </section>
    </>
  );
}