import React, { useState, useEffect } from "react"
import Image from 'next/image'
import { MdStore } from "react-icons/md";
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';

const Products_slider = ({ producst, typeof_product }) => {
    const [item, setItem] = useState({ name: 'all' });
    const [product, setProduct] = useState([]);
    const [active, setActive] = useState([]);


    useEffect(() => {
        if (item.name === 'all') {
            setProduct(producst)
        } else {
            const newProduct = producst.filter((producst_2) => {
                return producst_2.category.toLowerCase() === item.name;
            })
            setProduct(newProduct);
            console.log(producst.category)
            console.log(item.name)
        }
    }, [item])

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() })
        setActive(index);

    }

    console.log(item)
    console.log(product)


    return (

        <>
            <nav className="mb-3 max-w-xl mx-auto">
                <ul className="flex flex-col md:flex-row justify-evenly items-center text-white ">
                    {typeof_product.map((item, index) => {
                        return <li onClick={(e) => { handleClick(e, index) }} className={`${active == index ? 'active' : ''} cursor-pointer capitalize m-4 rounded-full border-2 border-gray-100 px-5 py-2.5 text-center bg-[#ba2024]`} key={index}>{item.name}</li>
                    }
                    )}

                </ul>

            </nav>

            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                grabCursor={true}
                loop={false}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1170: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}

            >
                {product.map((product, index) => {
                    // destructure client
                    const { category, image, name, prise } = product;
                    // slide
                    return (
                        <SwiperSlide
                            key={index}
                        >
                            {/* card */}
                            <div className='w-full mx-auto lg:max-w-[300px] xl:max-w-[350px] h-[22rem] overflow-hidden relative rounded-lg  flex flex-col justify-center items-center '>
                                <div className="absolute inset-x-0 top-0 flex justify-center items-center z-[3]">
                                    <div className="h-[10rem] w-[15rem] justify-center items-center flex">
                                        <Image
                                            className="relative rounded-lg"
                                            src={image}
                                            alt="Next.js Logo"
                                            width={190}
                                            height={190}
                                            priority
                                        />


                                    </div>
                                </div>
                                {/* content */}
                                <div className="basis-1/4 "></div>
                                <div className="basis-3/4 bg-[#ba2024] w-[15rem] rounded-lg relative overflow-hidden flex flex-col justify-center items-center z-[1] pt-14">
                                    <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                                        <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-10%] h-[110%] w-full skew-y-[-18deg]  fill-white/40 stroke-white/25">
                                            <defs>
                                                <pattern id=":R56hd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16">
                                                    <path d="M.5 56V.5H72" fill="none"></path>
                                                </pattern>
                                            </defs>
                                            <rect width="100%" height="100%" strokeWidth="0" fill="url(#:R56hd6:)"></rect>
                                            <svg x="50%" y="16" class="overflow-visible">
                                                <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
                                                <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
                                                <rect strokeWidth="0" width="73" height="57" x="-200" y="500"></rect>
                                                <rect strokeWidth="0" width="73" height="57" x="-450" y="650"></rect>
                                            </svg>
                                        </svg>
                                    </div>
                                    <h1 className="relative text-white">{name}</h1>
                                    <div className="border-t-2 border-white/60 w-[12rem] h-[2rem] flex items-center flex-row relative">
                                        <div class="flex flex-1 items-center">
                                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <p class="ml-2 text-sm font-medium text-white">4.95</p>
                                        </div>
                                        <div className="w-[0.1rem] h-[1.2rem] bg-white/60">

                                        </div>
                                        <p class="ml-2 text-sm font-medium text-white">300 g</p>
                                    </div>
                                    <div className="border-t-2 border-white/60 w-[12rem] h-[2rem] flex items-center flex-row">
                                        <div class="flex flex-1 items-center">
                                            <MdStore className="text-white" />
                                            <p class="ml-2 text-sm font-medium text-white">San jose 2345 calle 2</p>
                                        </div>
                                    </div>
                                    <div className="border-t-2 border-white/60 w-[12rem] h-[2rem] flex items-center flex-row">
                                        <p class="ml-2 text-sm font-medium text-white">$ {prise}</p>

                                    </div>
                                </div>


                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};

export default Products_slider


    // < div className = 'mb-[30px]' > { category }</div >

    //     <div className='flex gap-x-[10px]'>
    //         <img src={image} alt='' />
    //         <div className='font-bold'>{name}</div>
    //         <div className='text-light'>{prise}</div>
    //     </div>


    // < div className = "absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50" >
    //     <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-10%] h-[110%] w-full skew-y-[-18deg]  fill-white/40 stroke-white/25">
    //         <defs>
    //             <pattern id=":R56hd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16">
    //                 <path d="M.5 56V.5H72" fill="none"></path>
    //             </pattern>
    //         </defs>
    //         <rect width="100%" height="100%" strokeWidth="0" fill="url(#:R56hd6:)"></rect>
    //         <svg x="50%" y="16" class="overflow-visible">
    //             <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
    //             <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
    //             <rect strokeWidth="0" width="73" height="57" x="-200" y="500"></rect>
    //             <rect strokeWidth="0" width="73" height="57" x="-450" y="650"></rect>
    //         </svg>
    //     </svg>
    //                             </div >