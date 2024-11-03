import { motion } from "framer-motion";

export default function Main() {
    return (
        <>
            <section id="home" className='bgMain overflow-hidden'>
                <div className='flex flex-col h-full w-full items-center justify-center lg:flex-row'>

                    {/* SLIDER LEFT DESKTOP */}
                    <motion.article
                        initial={{ x: -200, opacity: 0 }} // Começa fora da tela à esquerda
                        animate={{ x: 0, opacity: 1 }} // Move para dentro e aumenta a opacidade
                        transition={{ duration: 1 }} // Duração da animação
                        className="hidden lg:flex w-[30%]"
                    >
                        <img className="relative left-[-100px]" src="slideleft.png" alt="Left Slide" />
                    </motion.article>

                    {/* MAIN TEXTOS */}
                    <article className="w-[60%]">
                        <p className="font-delius text-2xl text-center lg:text-2xl">
                            Comidas deliciosas e um cardápio incrível de cervejas
                        </p>
                        <h1 className="font-teko text-7xl mt-4 uppercase text-center lg:tracking-wider lg:text-8xl">
                            Feito com perfeição
                        </h1>
                        <article className="mt-4">
                            <img className="mx-auto" src="slidemain.png" alt="Delicious food" />
                        </article>
                    </article>

                    {/* SLIDER RIGHT DESKTOP */}
                    <motion.article
                        initial={{ x: 200, opacity: 0 }} // Começa fora da tela à direita
                        animate={{ x: 0, opacity: 1 }} // Move para dentro e aumenta a opacidade
                        transition={{ duration: 1 }} // Duração da animação
                        className="hidden lg:flex w-[30%]"
                    >
                        <img className="relative right-[-100px]" src="slideright.png" alt="Right Slide" />
                    </motion.article>

                    {/* SLIDER CHOPPS MOBILE */}
                    <div className="flex mt-20 justify-between w-full lg:hidden">
                        <article className="flex justify-start">
                            <img className="relative left-[-60px]" src="slideleft.png" alt="Left Slide" />
                        </article>

                        <article className="flex justify-end">
                            <img className="relative right-[-60px]" src="slideright.png" alt="Right Slide" />
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}
