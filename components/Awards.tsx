import { faAward } from '@fortawesome/free-solid-svg-icons/faAward';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Awards() {
    return (
        <div>
            <section id='awards' className='py-20 background_awards'>
                <div className='maxWidth'>

                    <h1 className='text-white text-7xl font-teko mt-4 uppercase text-center'>Nossos Prêmios</h1>
                    <p className='text-center'>Desde 2014, são 60 prêmios no Brasil e ao redor do mundo.</p>
                    <img className='mx-auto my-4' src="slidemain.png" alt="" />
                    {/* CONTAINER SLIDER */}
                    <article className='flex flex-col items-center gap-11 justify-center mt-20 lg:flex-row'>
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

                    <div className="mx-auto text-center mt-10 flex items-center justify-center gap-4">
                        <button className="font-teko uppercase bg-black text-white pt-4 pb-[13px] px-8">Mais conquistas
                            <FontAwesomeIcon className='ml-3' icon={faAward} />
                        </button>

                    </div>

                </div>
            </section>
        </div>
    );
}