import React from "react"

export default function Nav() {
    return (
        <nav>
            <ul className='flex gap-x-10'>
                <li>
                    <a className='hover:text-accent transition' href={'/'}>
                        Features
                    </a>
                </li>
                <li>
                    <a className='hover:text-accent transition' href={'/'}>
                        About us
                    </a>
                </li>
                <li>
                    <a className='hover:text-accent transition' href={'/'}>
                        Princing
                    </a>
                </li>
                <li>
                    <a className='hover:text-accent transition' href={'/'}>
                        Feedback
                    </a>
                </li>
            </ul>
        </nav>
    );
};

