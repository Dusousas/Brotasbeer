import React from 'react';

export default function About() {
  return (
    <div>
      <section className='background_h1 py-20'>
        <div className='maxWidth'>
          <article className='lg:w-[40%]'>
                <p className='text-textGreen font-delius text-center text-2xl lg:text-left'>Pub favorito da cidade!</p>
                <h1 className='text-black text-5xl font-teko mt-4 uppercase text-center lg:text-left '>Gastronomia de qualidade e cervejas incríveis</h1>
                <div className='w-full'>
                    <img className='mx-auto lg:mx-0 mt-4' src="slidegreen.png" alt="" />
                </div>

                <div className='mx-auto text-center mt-6 lg:text-left'><button className='font-teko uppercase bg-black text-white pt-4 pb-[13px] px-8'>Saiba mais</button></div>
          </article>

          <article>
            <div>
                <h1>Start & Share</h1>
                <div><img src="beer.png" alt="" /></div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}