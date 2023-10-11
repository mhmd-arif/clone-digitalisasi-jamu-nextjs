import React from "react";
import { FaMagnifyingGlass, FaBars } from "react-icons/fa6";

export default function Navbar() {
    return (
        <div className="fixed w-full mx-auto text-center">
            <div className="text-leaf-900 py-8 w-10/12 mx-auto flex justify-between items-center font-serif">
                <FaMagnifyingGlass className="text-xl hover:text-leaf-500 hover:drop-shadow transition" />
                <span className="font-bold">Literasi Jamu Digital</span>
                <FaBars className="text-xl" />
            </div>
        </div>
    );
}
