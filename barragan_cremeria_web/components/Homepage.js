import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay, Pagination, Navigation, Parallax, EffectFade } from "swiper";
import Image from 'next/image'
import mypic from '../public/queso.jpg'
import mypic1 from '../public/crema.jpg'
import mypic2 from '../public/queso2.jpg'
import mypic3 from '../public/carne.jpeg'

export default function Homepage() {
    return (
        <div className=" ">


            <Swiper
                spaceBetween={0}
                slidesPerView={1}

                centeredSlides={true}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}


                modules={[EffectFade, Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide>
                    <div className="min-w-screen min-h-screen bg-black relative overflow-hidden">
                        {/* Background img of each slider */}
                        <div className="absolute inset-0 [mask-image:linear-gradient(white,transparent)] flex justify-center items-stretch">
                            <Image
                                src={mypic}
                                alt="Picture of the author"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="mx-auto max-w-7xl text-center font-sans p-3 relative flex flex-col items-center justify-center">



                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="min-w-screen min-h-screen bg-black">
                        {/* Background img of each slider */}
                        <div className="absolute inset-0 [mask-image:linear-gradient(white,transparent)] flex justify-center items-stretch">
                            <Image
                                src={mypic1}
                                alt="Picture of the author"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="relative inline-flex items-center justify-center">
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="min-w-screen min-h-screen bg-black">
                        {/* Background img of each slider */}
                        <div className="absolute inset-0 [mask-image:linear-gradient(white,transparent)] flex justify-center items-stretch">
                            <Image
                                src={mypic2}
                                alt="Picture of the author"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="relative inline-flex items-center justify-center">
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>


        </div>
    )
};

