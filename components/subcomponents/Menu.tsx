import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri"; // Ícones de hambúrguer e X

export default function Menu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Ícone de Hambúrguer no Mobile */}
            <div className="lg:hidden flex items-center mt-2">
                <button onClick={toggleMenu} className="text-3xl" aria-label="Toggle menu">
                    {isOpen ? <RiCloseLine /> : <RiMenuLine />}
                </button>
            </div>

            <nav className="flex left-0 w-full mt-1">
                {/* Menu Desktop */}
                <ul className="hidden lg:flex gap-8 left-0 font-teko text-xl w-full justify-center uppercase">
                    <li>Home</li>
                    <li>Cervejaria</li>
                    <li>Beers</li>
                    <li>Pub</li>
                    <li>Chopp Delivery</li>
                    <li>Prêmios</li>
                </ul>

                {/* Menu Mobile */}
                {isOpen && (
                    <ul className="lg:hidden flex flex-col text-center gap-4 absolute top-[65px] left-0 bg-white p-4 w-full text-black">
                        <li>Home</li>
                        <li>Cervejaria</li>
                        <li>Beers</li>
                        <li>Pub</li>
                        <li>Chopp Delivery</li>
                        <li>Prêmios</li>
                    </ul>
                )}
            </nav>
        </>
    );
}
