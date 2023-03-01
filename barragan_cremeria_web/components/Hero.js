import React from "react"
// import icons
import { HiOutlineChevronDown } from 'react-icons/hi'

export default function Hero() {

    return (
        <section className='min-h-[900px] py-12'>
            <div className='container mx-auto min-h-[900px] flex justify-center items-center'>
                <div className='flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center '>
                    {/* text */}
                    <div className='flex-1 flex justify-center items-center flex-col'>
                        <h1
                            className='title mb-2 lg:mb-5'
                            data-aos='fade-down'
                            data-aos-delay='500'
                        >
                            Track your Expenses to Save Money
                        </h1>
                        <p
                            className='lead mb-5 lg:mb-10'
                            data-aos='fade-down'
                            data-aos-delay='600'
                        >
                            Helps you to organize your income and expenses
                        </p>
                        {/* btn & comp text */}
                        <div
                            className='flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'
                            data-aos='fade-down'
                            data-aos-delay='700'
                        >
                            <button className='btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4'>
                                Ver sucursales
                                <HiOutlineChevronDown />
                            </button>
                            <span className='text-light lg:lead lg:mb-0'>— Web, iOS and Android</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );

};

