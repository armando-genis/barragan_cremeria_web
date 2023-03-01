import React from "react"

export default function Aboutus() {
    return (
        <section className='section flex flex-col items-center gap-y-[30px] '>
            <div className='container mx-auto bg-[#ffffffa1] p-5 rounded-lg shadow-[#0000001a] drop-shadow-2xl'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px] '>
                    {/* text */}
                    <div className='flex-1' data-aos='fade-right' data-aos-offset='400'>
                        <div className='pretitle'>100% Mexicana</div>
                        <h2 className='title'>¿Quiénes somos?</h2>
                        <p className='lead'>Somos una empresa con más de 30 años de experiencia comercializando y elaborando productos con los más altos estándares de calidad, pensando en las familias mexicanas que buscan los mejores ingredientes para sus platillos.</p>
                        <button className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all'>
                            Mas informacion
                        </button>
                    </div>
                    {/* image */}
                    <div className='flex-1' data-aos='fade-left' data-aos-offset='300'>

                    </div>
                </div>

            </div>

        </section>
    );
};

