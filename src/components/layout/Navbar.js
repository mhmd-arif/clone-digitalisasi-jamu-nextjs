import Link from "next/link";
import React from "react";
import { FaMagnifyingGlass, FaBars } from "react-icons/fa6";

export default function Navbar({ theme = "light" }) {
    const [baseColor, hoverColor] =
        theme == "dark"
            ? ["text-leaf-100", "text-leaf-200"]
            : ["text-leaf-950", "text-leaf-700"];
    return (
        <div className="z-10 absolute w-full mx-auto text-center h-20">
            <div
                className={`${baseColor} py-8 w-full px-24 mx-auto flex justify-between items-center font-serif h-20`}
            >
                <FaMagnifyingGlass
                    className={`text-xl hover:${hoverColor} hover:drop-shadow transition`}
                />
                <Link href={"/"}>
                    <span className="font-jawa">Literasi Jamu Digital</span>
                </Link>
                <Link href={"/menu"}>
                    <FaBars className="text-xl" />
                </Link>
            </div>
        </div>
    );
}
