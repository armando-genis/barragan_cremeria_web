import React from "react"
import { IoPersonOutline, IoMailUnreadOutline, IoCreate, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
export default function Workwithus() {
    return (
        <section className='section flex flex-col items-center gap-y-[30px]'>
            <div className='container mx-auto bg-[#ffffffa1] p-5 rounded-lg shadow-[#0000001a] drop-shadow-2xl'>

                <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px] relative'>

                    <div className='flex-1' data-aos='fade-left' data-aos-offset='300'>
                        <form className="flex flex-col" >
                            <div class="relative mb-6">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white text-lg font-semibold">
                                    <IoPersonOutline />
                                </div>
                                <input type="text" id="input-group-1" class="bg-[#ffffff12] border border-gray-600  text-sm rounded-lg  block w-full pl-10 p-2.5 text-white" placeholder="Name" />
                            </div>
                            <div class="relative mb-6">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white text-lg font-semibold">
                                    <IoMailUnreadOutline />
                                </div>
                                <input type="text" id="input-group-1" class="bg-[#ffffff12] border border-gray-600  text-sm rounded-lg  block w-full pl-10 p-2.5 text-white" placeholder="Email" />
                            </div>



                        </form>
                    </div>


                    <div className='flex-1' data-aos='fade-right' data-aos-offset='400'>
                        <div className='pretitle'>!Unete!</div>
                        <h2 className='title'>Trabaja con nosotros</h2>
                        <p className='lead text-black'>
                            Siempre estamos en la búsqueda de nuevos talentos y nos encantaría saber mas de ti, déjanos tus datos en el siguiente formulario y nosotros nos pondremos en contacto contigo, recuerda llenar todos los campos completamente y utilizar información verídica.
                        </p>


                    </div>

                </div>

            </div>

        </section>
    );
};

