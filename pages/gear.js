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

                        </div>
                        <h3 className="text-3xl mb-2 font-semibold leading-normal">
                            About Us
                        </h3>

                    </div>
                </div>

                <div class="text-center">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/mrvisuals-web.appspot.com/o/website%2FPBNicola.jpg?alt=media&token=4322dd99-e3d1-4b00-91cb-637b219d93ed"
                        class="rounded-full w-32 h-32 mb-4 mx-auto"
                        alt="Avatar"
                    />
                    <h5 class="text-xl font-medium leading-tight mb-2">Nicola Reber</h5>
                    <p class="text-gray-500">Computer Scientist | Photographer </p>
                </div>
                
                <div class="text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                  class="rounded-full w-32 mb-4 mx-auto"
                  alt="Avatar"
                />
                <h5 class="text-xl font-medium leading-tight mb-2">John Doe</h5>
                <p class="text-gray-500">Web designer</p>
              </div>

            </main>

        </>
    );
}
