import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Importa o tipo de Swiper para definir o tipo da referência
import { Swiper as SwiperType, NavigationOptions } from 'swiper/types';

export default function SlideBeers() {
    // Define o tipo de swiperRef como SwiperType
    const swiperRef = useRef<SwiperType | null>(null);
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.params.navigation) {
            const navigation = swiperRef.current.params.navigation as NavigationOptions;
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <div>
            <section id='beers' className='flex items-center gap-2'>
                {/* Botão de navegação esquerda */}
                <div ref={prevRef} className='text-center my-4 cursor-pointer'>
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" className="text-black" />
                </div>

                <Swiper
                    onInit={(swiper) => {
                        swiperRef.current = swiper; // Atribui o swiper à referência após a inicialização
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={ false } // Define a navegação como um objeto
                    modules={[Navigation]}
                    breakpoints={{
                        1024: { // A partir do breakpoint lg
                            slidesPerView: 2,
                        },
                    }}
                >
                    {/* Slide 1 */}
                    <SwiperSlide>
                        <article className='flex items-center'>
                            <div className='w-[60%]'>
                                <img className='w-full' src="beers_h1.png" alt="Pilsen" />
                            </div>
                            <div>
                                <h1 className='text-black font-teko font-semibold uppercase text-2xl'>Pilsen <span className='text-xl font-light ml-4'>4.7% alcool</span></h1>
                                <div className='mt-2'>
                                    <img src="slidegreen.png" alt="Decorative line" />
                                </div>
                                <p className='max-w-[350px] text-textGray mt-4'>Cerveja Pilsen de baixa fermentação (Lager), de corpo dourado e brilhante. É o estilo de cerveja mais consumido em todo o mundo. Em seu paladar estão presentes leves notas de cereais, provenientes do malte Pilsen, que lembram biscoito cream cracker.</p>
                                <h2 className='text-xl text-black font-teko mt-2'>15 IBUs amargor</h2>

                            </div>
                        </article>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <article className='flex items-center'>
                            <div className='w-[60%]'>
                                <img className='w-full' src="beers_h1.png" alt="Weissbier" />
                            </div>
                            <div>
                                <h1 className='text-black font-teko font-semibold uppercase text-2xl'>WEISSBIER<span className='text-xl font-light ml-4'>4.3% alcool</span></h1>
                                <div className='mt-2'>
                                    <img src="slidegreen.png" alt="Decorative line" />
                                </div>
                                <p className='max-w-[350px] text-textGray mt-4'>
                                    Cerveja de trigo tipo Weissbier de alta fermentação (Ale), clara, condimentada, frutada e extremamente refrescante. Esta cerveja é uma especialidade do verão no sul da Alemanha. É porta de entrada no mundo das cervejas especiais.
                                </p>
                                <h2 className='text-xl text-black font-teko mt-2'>13 IBUs amargor</h2>

                            </div>
                        </article>
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide>
                        <article className='flex items-center'>
                            <div className='w-[60%]'>
                                <img className='w-full' src="beers_h1.png" alt="Red Ale" />
                            </div>
                            <div>
                                <h1 className='text-black font-teko font-semibold uppercase text-2xl'>RED ALE<span className='text-xl font-light ml-4'>5.0% alcool</span></h1>
                                <div className='mt-2'>
                                    <img src="slidegreen.png" alt="Decorative line" />
                                </div>
                                <p className='max-w-[350px] text-textGray mt-4'>
                                    Cerveja forte escura tipo Red Ale de alta fermentação, de origem irlandesa, com um profundo e cristalino tom avermelhado, de corpo médio e colarinho baixo. Com uma presença moderada de malte em seu aroma e sabor, ela se destaca pelo suave sabor dos lúpulos ingleses.
                                </p>
                                <h2 className='text-xl text-black font-teko mt-2'>25 IBUs amargor</h2>

                            </div>
                        </article>
                    </SwiperSlide>
                </Swiper>

                {/* Botão de navegação direita */}
                <div ref={nextRef} className='text-center my-4 cursor-pointer'>
                    <FontAwesomeIcon icon={faArrowRight} size="2x" className="text-black" />
                </div>
            </section>
        </div>
    );
}
