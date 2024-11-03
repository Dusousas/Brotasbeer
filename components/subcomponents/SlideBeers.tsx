import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function SlideBeers() {
    // Referências para os botões de navegação
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div>
            <section id='beers' className='flex items-center gap-2'>
                {/* Botão de navegação esquerda */}
                <div
                    ref={prevRef}
                    className='text-center my-4 cursor-pointer'
                >
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" className="text-black" />
                </div>
                
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onInit={(swiper) => {
                        // Atribui as referências após a inicialização do Swiper
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
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
                                <h1 className='text-black font-teko font-semibold uppercase text-2xl'>Pilsen</h1>
                                <div className='mt-2'>
                                    <img src="slidegreen.png" alt="Decorative line" />
                                </div>
                                <p className='max-w-[350px] text-textGray mt-4'>
                                Cerveja Pilsen de baixa fermentação (Lager), de corpo dourado e brilhante. É o estilo de cerveja mais consumido em todo o mundo. Em seu paladar estão presentes leves notas de cereais, provenientes do malte Pilsen, que lembram biscoito cream cracker.
                                </p>
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
                                <h1 className='text-black font-teko font-semibold uppercase text-2xl'>WEISSBIER</h1>
                                <div className='mt-2'>
                                    <img src="slidegreen.png" alt="Decorative line" />
                                </div>
                                <p className='max-w-[350px] text-textGray mt-4'>
                                Cerveja de trigo tipo Weissbier de alta fermentação (Ale), clara, condimentada, frutada e extremamente refrescante. Esta cerveja é uma especialidade do verão no sul da Alemanha. É porta de entrada no mundo das cervejas especiais.
                                </p>
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
                                <h1 className='text-black font-teko font-semibold uppercase text-2xl'>RED ALE</h1>
                                <div className='mt-2'>
                                    <img src="slidegreen.png" alt="Decorative line" />
                                </div>
                                <p className='max-w-[350px] text-textGray mt-4'>
                                Cerveja forte escura tipo Red Ale de alta fermentação, de origem irlandesa, com um profundo e cristalino tom avermelhado, de corpo médio e colarinho baixo. Com uma presença moderada de malte em seu aroma e sabor, ela se destaca pelo suave sabor dos lúpulos ingleses.
                                </p>
                            </div>
                        </article>
                    </SwiperSlide>
                </Swiper>

                {/* Botão de navegação direita */}
                <div
                    ref={nextRef}
                    className='text-center my-4 cursor-pointer'
                >
                    <FontAwesomeIcon icon={faArrowRight} size="2x" className="text-black" />
                </div>

            </section>
        </div>
    );
}