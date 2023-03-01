import React from "react"

export default function Products() {
    return (
        <section className='section min-h-screen'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center lg:gap-y-[20px]'>
                    {/* text */}
                    <div className='flex-1 text-center' data-aos='fade-right' data-aos-offset='400'>
                        <div className='pretitle'>Nuestros productos</div>
                        <p className='lead'>En Cremería Hermanos Coronel estamos comprometidos con ofrecer a nuestros clientes una gran y satisfactoria experiencia de compra, por ello, producimos y comercializamos productos con los más altos estándares de calidad y la mejor relación costo beneficio. </p>

                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="text-center h-[6rem] flex-1 ">
                            <h1 className="tracking-tight font-display font-bold text-6xl text-slate-100">20</h1>
                            <h1 className="text-[#888] tracking-wide font-light text-[1rem]">years</h1>
                        </div>
                    </div>
                    {/* image */}
                    <div className='flex-1' data-aos='fade-left' data-aos-offset='300'>

                    </div>
                </div>
            </div>
        </section>
    );
};

