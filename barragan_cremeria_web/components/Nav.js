import React from "react"

export default function Nav() {
    return (
        <nav>
            <ul className='flex gap-x-10'>
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
        </nav>
    );
};

