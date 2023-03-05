import React from "react"
// import icons
import { HiOutlineChevronDown, HiShoppingCart, HiTruck } from 'react-icons/hi'
import { hero } from "../pages/information";
import Image from 'next/image'

export default function Hero() {
    const { image } = hero;
    return (
        <section className="bg-fixed bg-center bg-cover custom-img">
            <div className='container flex items-center justify-center h-screen m-auto mb-3 pt-10'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px] p-6'>

                    <div className='flex-1' data-aos='fade-left' data-aos-offset='500'>
                        <Image
                            className="relative"
                            src={image}
                            alt="Next.js Logo"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>
                    {/* text */}
                    <div className='flex-1' data-aos='fade-right' data-aos-offset='500'>

                        <h2 className='title text-light'>Elaborado con leche de alta calidad</h2>
                        <p className='lead text-light'>Conoce nuestros producstos y sucursales</p>
                        <div
                            className='flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'
                            data-aos='fade-down'
                            data-aos-delay='700'
                        >
                            <button className='btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4'>
                                sucursales
                                <HiShoppingCart />
                            </button>
                            <button className='btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4'>
                                Contacto
                                <HiTruck />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

};


{/* <div className='pt-12 flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center '>

    <div className='flex-1 flex justify-center items-center flex-col'>


        <div className="mb-2 lg:mb-5" data-aos='fade-down' data-aos-delay='600'>
            <Image
                className="relative"
                src={image}
                alt="Next.js Logo"
                width={500}
                height={500}
                priority
            />
        </div>
        <p
            className='lead mb-5 lg:mb-5'
            data-aos='fade-down'
            data-aos-delay='600'
        >
            Elaborado con leche de alta calidad
        </p>

        <div
            className='flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'
            data-aos='fade-down'
            data-aos-delay='700'
        >
            <button className='btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4'>
                sucursales
                <HiShoppingCart />
            </button>
            <button className='btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4'>
                Contacto
                <HiTruck />
            </button>
        </div>
    </div>

</div> */}