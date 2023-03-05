import React from "react"
import Image from 'next/image'
import { aboutus } from "../pages/information";
import { HiChatAlt2, HiPhoneIncoming, HiUser } from "react-icons/hi";

export default function Aboutus() {
    const { image } = aboutus;
    return (
        <section className='section flex flex-col items-center gap-y-[30px] '>
            <div className="w-8/12 flex flex-row items-center justify-between">
                <div className=" flex-1 btn flex space-x-6 flex-wrap">
                    <HiChatAlt2 className="text-[3rem] text-light" />
                    <div>
                        <h1 className="text-[#888] tracking-wide font-light text-[1rem]">Horario de Atencion</h1>
                        <h1 className="text-[#888] tracking-wide font-light text-[0.8rem]">LUN A SAB: 9:30AM – 8PM</h1>
                    </div>
                </div>
                <div className=" flex-1 btn flex space-x-6">
                    <HiPhoneIncoming className="text-[3rem] text-light" />
                    <div>
                        <h1 className="text-[#888] tracking-wide font-light text-[1rem]">Tel. 8475.4431</h1>
                        <h1 className="text-[#888] tracking-wide font-light text-[0.8rem]">LLAMA Y PIDE A DOMICILIO</h1>
                    </div>
                </div>
                <div className=" flex-1 btn flex space-x-6">
                    <HiUser className="text-[3rem] text-light" />
                    <div>
                        <h1 className="text-[#888] tracking-wide font-light text-[1rem]">Tel. 8478.7439</h1>
                        <h1 className="text-[#888] tracking-wide font-light text-[0.8rem]">SERVICIO A CLIENTES</h1>
                    </div>
                </div>


            </div>
            <div className='container mx-auto bg-[#ffffffa1] p-5 rounded-lg shadow-[#000] drop-shadow-2xl'>

                <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px] '>
                    {/* text */}
                    <div className='flex-1' data-aos='fade-right' data-aos-offset='400'>
                        <div className='pretitle'>100% Mexicana</div>
                        <h2 className='title'>¿Quiénes somos?</h2>
                        <p className='lead text-black'>Somos una empresa con más de 30 años de experiencia comercializando y elaborando productos con los más altos estándares de calidad, pensando en las familias mexicanas que buscan los mejores ingredientes para sus platillos.</p>

                    </div>
                    {/* image */}
                    <div className='flex-1 relative' data-aos='fade-left' data-aos-offset='300'>
                        <Image
                            className="relative rounded-lg"
                            src={image}
                            alt="Next.js Logo"
                            width={500}
                            height={500}
                            priority
                        />

                    </div>
                </div>

            </div>

        </section>
    );
};

