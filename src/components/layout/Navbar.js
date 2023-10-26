"use client";
import Link from "next/link";
import React from "react";
import { FaMagnifyingGlass, FaBars } from "react-icons/fa6";

export default function Navbar({ theme = "light" }) {
    function toggleSearch() {
        document.getElementById("search").focus();
    }
    const [baseColor, hoverColor] =
        theme == "dark"
            ? ["text-leaf-100", "text-leaf-200"]
            : ["text-leaf-950", "text-leaf-700"];

    return (
        <div className="z-10 absolute w-full mx-auto text-center h-20">
            <div
                className={`${baseColor} py-8 w-full px-24 mx-auto flex justify-between items-center font-serif h-20`}
            >
                <Link href={"/menu"}>
                    <FaBars className="text-xl" />
                </Link>

                <Link href={"/"}>
                    <span className="font-jawa">Literasi Jamu Digital</span>
                </Link>

                <Link href={"/pencarian"}>
                    <FaMagnifyingGlass className="text-xl" />
                </Link>

                {/* <form className="flex justify-end">
                    <div className="relative text-leaf-950 font-sans">
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <button
                                className="p-1 focus:outline-none focus:shadow-outline"
                                onClick={toggleSearch}
                            >
                                <FaMagnifyingGlass />
                            </button>
                        </span>

                        <input
                            type="text"
                            id="search"
                            className="py-2 text-sm text-leaf-950 bg-leaf-50 rounded-full pl-4 pr-10 w-64 focus:outline-none focus:bg-white focus:text-gray-900"
                            placeholder="Cari..."
                            autoComplete="off"
                        />
                    </div>
                </form> */}
            </div>
        </div>
    );
}
