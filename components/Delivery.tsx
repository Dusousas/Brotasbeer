import React from 'react';

export default function Delivery() {
    return (
        <div>
            <section id='delivery' className='background_h1 py-20'>
                <div className='px-[4%] flex flex-col lg:px-0 max-w-[1400px] mx-auto lg:flex-row'>

                    <article className='mt-10'>
                        <h1 className='text-textGreen font-delius text-center text-2xl lg:text-left'>O convidado mais ilustre</h1>
                        <p className='text-black text-5xl font-teko uppercase text-center mt-2 lg:text-left'>Convide a Brotas Beer para a sua próxima festa!</p>
                        <div><img className='mx-auto mt-4 lg:mx-0' src="slidegreen.png" alt="" /></div>
                        <div className='flex mt-8'><button className='font-teko uppercase mx-auto bg-black text-white pt-4 pb-[13px] px-8 lg:mx-0'>Como funciona?</button></div>
                    </article>

                    <article className='background_pub_2 bg-white  outline outline-textGreen outline-8 mt-10 py-32 px-10 lg:w-1/2'>
                        <h1 className='text-black text-5xl font-teko mt-4 uppercase text-center'>Chopp Delivery</h1>
                        <div className='mb-8'><img className='mx-auto my-2' src="slidegreen.png" alt="" /></div>

                        <h1 className='text-black font-teko font-semibold uppercase text-2xl'>Do tamanho da sua sede</h1>
                        <p className='text-black'>Escolha os estilos de chopp que você deseja nos barris de 20, 30 ou 50 litros.</p>

                        <h1 className='text-black font-teko font-semibold uppercase text-2xl mt-6'>Estilos disponíveis</h1>
                        <p className='text-black'>Vários estilos sempre disponíveis. Consulte disponibilidade pelo nosso Whatsapp.</p>

                        <h1 className='text-black font-teko font-semibold uppercase text-2xl mt-6'>O que está incluso</h1>
                        <p className='text-black'>A compra do chopp inclui o delivery da chopeira e o CO2, gelo e instalação. Pronto para uso!</p>

                        <h1 className='text-black font-teko font-semibold uppercase text-2xl mt-6'>Entrega</h1>
                        <p className='text-black'>Fazemos entrega em Brotas de segunda à sexta em horário comercial e de sábado até às 12h.</p>
                    </article>

                </div>
            </section>
        </div>
    );
}