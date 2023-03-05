// import images
import LogoImg from '../public/logo.png'
import Logo_barragan from '../public/logo_barragan.png'
import aboutus_img from '../public/aboutus.jpg'
import img_p1 from '../public/producto2_png.png'
import img_p2 from '../public/producto3.png'



export const header = {
    image: Logo_barragan,
};

export const aboutus = {
    image: aboutus_img,
};

// data
export const hero = {
    image: LogoImg,
};


export const database_product = {
    typeof_product: [
        {
            name: 'all',
        },
        {
            name: 'Crema',
        },
        {
            name: 'Quesos',
        },
        {
            name: 'tortilla',
        },
        {
            name: 'gomitas',
        },
    ],
    producst: [
        {
            id: '1',
            category: 'Crema',
            image: img_p1,
            name: 'Gorgonzola',
            prise: '12.23',
        },
        {
            id: '2',
            category: 'tortilla',
            image: img_p2,
            name: 'Gorgonzola',
            prise: '12.23',
        },
        {
            id: '3',
            category: 'Crema',
            image: img_p1,
            name: 'Gorgonzola',
            prise: '12.56',
        },
        {
            id: '4',
            category: 'tortilla',
            image: img_p2,
            name: 'Gorgonzola',
            prise: '12.23',
        },
        {
            id: '5',
            category: 'tortilla',
            image: img_p2,
            name: 'Gorgonzola',
            prise: '12.23',
        },
    ],
};