import React from "react";
import Link from "next/link";
import { AiFillCamera } from "react-icons/ai"
import { FaHammer, FaUserAlt } from "react-icons/fa"
import { BsChatFill } from "react-icons/bs"
import Navbar from "components/Navbars/AuthNavbar.js";


export default function Landing() {
    return (
        <>
            <Navbar transparent />
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://live.staticflickr.com/65535/51898197164_3c0f8b7b69_k.jpg')",
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-75 bg-black"
                        ></span>
                    </div>

                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
                        style={{ transform: "translateZ(0)" }}
                    >

                    </div>
                </div>
                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-emerald-400">
                            <BsChatFill className="text-white text-3xl" />
                            <h3 className="text-3xl mb-2 font-semibold leading-normal">
                            Social Mediaa
                        </h3>
                        </div>
                        

                    </div>



                </div>
                <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
                    <section className="pb-20 bg-blueGray-200 mt-24">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap">

                                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                    <a href="/test">
                                        <div className="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-8 shadow-lg rounded-lg">
                                            <div className="px-4 py-5 flex-auto">
                                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                                    <FaHammer className="text-white text-3xl" />
                                                </div>
                                                <h6 className="text-xl font-semibold">Instagram</h6>
                                                <p className="mt-2 mb-4 text-blueGray-500">

                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                    <a href="/gear">
                                        <div className="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-8 shadow-lg rounded-lg">
                                            <div className="px-4 py-5 flex-auto">
                                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                                    <AiFillCamera className="text-white text-2xl" />
                                                </div>
                                                <h6 className="text-xl font-semibold">YouTube</h6>
                                                <p className="mt-2 mb-4 text-blueGray-500">

                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                    <a href="/gear">
                                        <div className="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-8 shadow-lg rounded-lg">
                                            <div className="px-4 py-5 flex-auto">
                                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                                    <AiFillCamera className="text-white text-2xl" />
                                                </div>
                                                <h6 className="text-xl font-semibold">YouTube</h6>
                                                <p className="mt-2 mb-4 text-blueGray-500">

                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                    <a href="/gear">
                                        <div className="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-8 shadow-lg rounded-lg">
                                            <div className="px-4 py-5 flex-auto">
                                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                                    <AiFillCamera className="text-white text-2xl" />
                                                </div>
                                                <h6 className="text-xl font-semibold">YouTube</h6>
                                                <p className="mt-2 mb-4 text-blueGray-500">

                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </main>

        </>
    );
}
