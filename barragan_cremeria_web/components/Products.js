import React from "react"
import Products_slider from "./Products_slider";
// import data
import { database_product } from "../pages/information";

export default function Products() {
    const { producst, typeof_product } = database_product;
    return (
        <section className='section min-h-screen bg-fixed bg-center bg-cover custom-img2'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center lg:gap-y-[20px] -mb-6'>
                    {/* text */}
                    <div className='flex-1 ' data-aos='fade-right' data-aos-offset='400'>
                        <div className='title text-light'>Nuestros productos</div>
                        <p className='lead '>En Cremería Hermanos Coronel estamos comprometidos con ofrecer a nuestros clientes una gran y satisfactoria experiencia de compra, por ello, producimos y comercializamos productos con los más altos estándares de calidad y la mejor relación costo beneficio. </p>

                    </div>

                </div>
                <Products_slider producst={producst} typeof_product={typeof_product} />
            </div>
        </section>
    );
};

