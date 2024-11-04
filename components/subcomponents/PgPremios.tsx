import React from 'react';

export default function PgPremios() {
    return (
        <>
            {/* CONTAINER 2023*/}
            <h1 id='awards' className='text-center py-10 font-teko text-5xl uppercase lg:tracking-wider text-black'>Premios 2023</h1>
            <article id='awards' className='flex flex-col items-center gap-11 justify-center lg:flex-row pb-20'>
                {/* SLIDER SINGLE */}
                <div className='outline outline-[#d4af37]'>
                    <img src="1best_of_show.png" alt="" />
                    <div className='gold-gradient'>
                        <h2 className='text-black text-center uppercase font-teko text-xl pt-2'>Brotas Beer</h2>
                        <h1 className='text-black uppercase font-semibold text-center'>2023 - Ouro</h1>
                        <p className='text-black text-center uppercase font-teko text-xl pt-2'>Best of Show</p>
                    </div>
                </div>

                {/* SLIDER SINGLE */}
                <div className='outline outline-[#c0c0c0]'>
                    <img src="2-cervejaria_ano.png" alt="" />
                    <div className='silver-gradient'>
                        <h2 className='text-black text-center uppercase font-teko text-xl pt-2'>Brotas Beer</h2>
                        <h1 className='text-black uppercase font-semibold text-center'>2023 - Prata</h1>
                        <p className='text-black text-center uppercase font-teko text-xl pt-2'>2ª Cervejaria do Ano</p>
                    </div>
                </div>

                {/* SLIDER SINGLE */}
                <div className='outline outline-[#d4af37]'>
                    <img src="3-g_schwarz_2023_Copa_cerveja_america_gold.png" alt="" />
                    <div className='gold-gradient'>
                        <h2 className='text-black text-center uppercase font-teko text-xl pt-2'>Brotas Beer</h2>
                        <h1 className='text-black uppercase font-semibold text-center'>2023 - Prata</h1>
                        <p className='text-black text-center uppercase font-teko text-xl pt-2'>Copa de Cervezas America</p>
                    </div>
                </div>
            </article>

        </>
    );
}