import React from "react"
import { IoPersonOutline, IoMailUnreadOutline, IoCreate, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
export default function Contact() {
    return (
        <section className='section flex flex-col items-center gap-y-[30px] '>
            <h2 className='title'>Contactanos</h2>
            <div className='container mx-auto bg-[#ffffffa1] p-5 rounded-lg shadow-[#0000001a] drop-shadow-2xl'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px] '>
                    {/* text */}
                    <div className='flex-1' data-aos='fade-right' data-aos-offset='300'>
                        <form className="flex flex-col" >
                            <div class="relative mb-6">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black text-lg font-semibold">
                                    <IoPersonOutline />
                                </div>
                                <input type="text" id="input-group-1" class="bg-[#ffffff12] border border-gray-800  text-sm rounded-lg  block w-full pl-10 p-2.5 text-black" placeholder="Name" />
                            </div>
                            <div class="relative mb-6">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black text-lg font-semibold">
                                    <IoMailUnreadOutline />
                                </div>
                                <input type="text" id="input-group-1" class="bg-[#ffffff12] border border-gray-800  text-sm rounded-lg  block w-full pl-10 p-2.5 text-black" placeholder="Email" />
                            </div>

                            <div class="relative mb-6">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black text-lg font-semibold">
                                    <IoCreate />
                                </div>
                                <input type="text" id="input-group-1" class="bg-[#ffffff12] border border-gray-800  text-sm rounded-lg  block w-full pl-10 p-2.5 text-black" placeholder="Subject" />
                            </div>

                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Mensaje</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-white border-gray-600 bg-[#ffffff12] border " placeholder="Write your thoughts here..."></textarea>
                        </form>
                    </div>
                    {/* image */}
                    <div className='flex-1' data-aos='fade-left' data-aos-offset='300'>

                        <p class="font-display font-light text-1xl text-left text-black pt-1">Calle del Puente #222</p>
                        <p class="font-display font-light text-1xl text-left text-black pt-1">Col. Ejidos de Huipulco, Tlalpan C.P. 14380.</p>
                        <p class="font-display font-light text-1xl text-left text-black pt-1">México D.F.</p>
                        <p class="font-display font-light text-1xl text-left text-black pt-1">Barragan@outlook.mx</p>
                        <div className="flex flex-row space-x-3 mt-4">
                            <div className="h-10 w-10 text-center  bg-[#ba2024] border rounded-lg text-white inline-flex items-center justify-center text-xl">
                                <IoLogoFacebook />
                            </div>
                            <div className="h-10 w-10 text-center  bg-[#ba2024] border rounded-lg text-white inline-flex items-center justify-center text-xl">
                                <IoLogoInstagram />
                            </div>
                            <div className="h-10 w-10 text-center  bg-[#ba2024] border rounded-lg text-white inline-flex items-center justify-center text-xl">
                                <IoLogoLinkedin />
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

