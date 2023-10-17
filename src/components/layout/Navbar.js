import React from "react";
import { FaMagnifyingGlass, FaBars } from "react-icons/fa6";

export default function Navbar() {
    return (
        <div className="z-10 inset-0 sticky w-full mx-auto text-center h-20">
            <div className="text-leaf-900 py-8 w-full px-24 mx-auto flex justify-between items-center font-serif">
                <FaMagnifyingGlass className="text-xl hover:text-leaf-500 hover:drop-shadow transition" />
                <span className="font-bold">Literasi Jamu Digital</span>
                <FaBars className="text-xl" />
            </div>
        </div>
    );
}
