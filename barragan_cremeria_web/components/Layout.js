import React from "react"
import Header from './Header'
import Footer from "./Footer"
export default function Layout(props) {
    const { children } = props
    return (
        <div className="mx-auto bg-[#f0efef] min-w-screen">
            <main>
                {/* <Header /> */}
                {children}
                <Footer />


            </main>
        </div>
    )
};

