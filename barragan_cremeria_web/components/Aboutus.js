import React from "react"

export default function Aboutus() {
    return (
        <div className=" min-w-screen relative overflow-hidden flex flex-col items-center ">
            <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] inline-flex items-center justify-center z-[1]">
                <div className="w-[8rem] h-[8rem] bg-red-600  blur-3xl"></div>
                <div className="w-[17rem] h-[17rem] bg-red-600  blur-3xl"></div>
            </div>
            {/* content */}
            <div className="relative bg-[#ffffff12] w-8/12  rounded-lg shadow-[#0000001a] drop-shadow-2xl z-[2] p-6 mt-4">
                <div className="flex flex-row">
                    <div className="basis-1/2">
                        <p class="pl-10 tracking-tight font-display font-semibold text-3xl text-left text-slate-100">Hello, this is</p>
                        <p class="pl-10 tracking-tight font-display font-bold text-6xl text-left text-slate-100">Borregos ccm</p>
                        <p class="pl-10 pt-6 font-display font-light text-1xl text-left text-slate-100">KTH Formula Student is a nonprofit project where we design, manufacture, test and compete with a car in Formula Student. The project is all about learning to work as a team and produce a high-quality product together. The experiences gained from the yearlong project gives the members a head-start in the transit between academic studies and the future workplace.. </p>
                        <p class="pl-10 pt-6  font-display font-light text-2xl text-left text-slate-100">Click for more</p>
                    </div>
                    <div className="basis-1/2 inline-flex items-center justify-center">

                    </div>
                </div>
            </div>

            <div className="w-8/12 flex flex-row items-center justify-between py-4">
                <div className="text-center h-[6rem] flex-1 ">
                    <h1 className="tracking-tight font-display font-bold text-6xl text-slate-100">20</h1>
                    <h1 className="text-[#888] tracking-wide font-light text-[1rem]">years</h1>
                </div>
                <div className="w-[0.15rem] h-[6rem] bg-white/20"></div>
                <div className="text-center h-[6rem] flex-1">
                    <h1 className="tracking-tight font-display font-bold text-6xl text-slate-100">+50</h1>
                    <h1 className="text-[#888] tracking-wide font-light text-[1rem]">members</h1>
                </div>
                <div className="w-[0.15rem] h-[6rem] bg-white/20"></div>
                <div className="text-center h-[6rem] flex-1">
                    <h1 className="tracking-tight font-display font-bold text-6xl text-slate-100">7</h1>
                    <h1 className="text-[#888] tracking-wide font-light text-[1rem]">departments</h1>
                </div>
                <div className="w-[0.15rem] h-[6rem] bg-white/20"></div>
                <div className="text-center h-[6rem] flex-1">
                    <h1 className="tracking-tight font-display font-bold text-6xl text-slate-100">11</h1>
                    <h1 className="text-[#888] tracking-wide font-light text-[1rem]">prizes</h1>
                </div>
                <div className="w-[0.15rem] h-[6rem] bg-white/20"></div>
                <div className="text-center h-[6rem] flex-1">
                    <h1 className="tracking-tight font-display font-bold text-6xl text-slate-100">6</h1>
                    <h1 className="text-[#888] tracking-wide font-light text-[1rem]">cars</h1>
                </div>

            </div>
        </div>
    )
};

