import React from "react"

export default function MobileNav() {
    return (
        <div className='bg-accent/95 w-full h-full'>
            <ul className='h-full flex flex-col justify-center items-center gap-y-8'>
                <li>
                    <a className='hover:text-accent transition' href={'/'}>
                        Nosotros
                    </a>
                </li>
                <li>
                    <a className='hover:text-accent transition' href={'/'}>
                        Productos
                    </a>
                </li>
                <li>
                    <a className='hover:text-accent transition' href={'/'}>
                        Trabaja con nosotros
                    </a>
                </li>
                <li>
                    <a className='hover:text-accent transition' href={'/'}>
                        Historia
                    </a>
                </li>
            </ul>
        </div>
    );
};

