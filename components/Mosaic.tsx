import React from 'react';

export default function Mosaic() {
    return (
        <div>
            <section id='about' className=''>
                <div className="grid grid-cols-1 lg:grid-cols-4 grid-rows-4 gap-0">
                    
                    {/* PUB */}
                    <div className="lg:col-span-2 lg:row-span-2 relative group cursor-pointer">
                        <img className='w-full h-[300px] object-cover object-top transition-opacity duration-300 group-hover:opacity-75' src="grid1.png" alt="Pub" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-semibold">PRÊMIOS</span>
                        </div>
                    </div>
                    
                    {/* CHOPP DELIVERY */}
                    <div className="lg:col-span-2 lg:row-span-2 lg:col-start-3 relative group cursor-pointer">
                        <img className='w-full h-[300px] object-cover transition-opacity duration-300 group-hover:opacity-75' src="grid2.png" alt="Chopp Delivery" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-semibold">CHOPP DELIVERY</span>
                        </div>
                    </div>
                    
                    {/* A FABRICA */}
                    <div className="lg:row-span-2 lg:row-start-3 relative group cursor-pointer">
                        <img className='w-full h-[300px] object-cover transition-opacity duration-300 group-hover:opacity-75' src="grid3.png" alt="A Fábrica" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-semibold">A FÁBRICA</span>
                        </div>
                    </div>
                    
                    {/* CARDAPIO */}
                    <div className="lg:row-span-2 lg:row-start-3 relative group cursor-pointer">
                        <img className='w-full h-[300px] object-cover transition-opacity duration-300 group-hover:opacity-75' src="grid4.png" alt="Cardápio" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-semibold">CARDÁPIO</span>
                        </div>
                    </div>
                    
                    {/* BEERS */}
                    <div className="lg:col-span-2 lg:row-span-2 lg:row-start-3 relative group cursor-pointer">
                        <img className='w-full h-[300px] object-cover transition-opacity duration-300 group-hover:opacity-75' src="grid5.png" alt="Beers" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-semibold">BEERS</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
