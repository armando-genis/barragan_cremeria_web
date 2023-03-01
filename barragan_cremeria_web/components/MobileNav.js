import React from "react"

export default function MobileNav() {
    return (
        <div className='bg-accent/95 w-full h-full'>
            <ul className='h-full flex flex-col justify-center items-center gap-y-8'>
                <li>
                    <a className='link text-white text-xl' href={'/'}>
                        Features
                    </a>
                </li>
                <li>
                    <a className='link text-white text-xl' href={'/'}>
                        About us
                    </a>
                </li>
                <li>
                    <a className='link text-white text-xl' href={'/'}>
                        Princing
                    </a>
                </li>
                <li>
                    <a className='link text-white text-xl' href={'/'}>
                        Feedback
                    </a>
                </li>
            </ul>
        </div>
    );
};

