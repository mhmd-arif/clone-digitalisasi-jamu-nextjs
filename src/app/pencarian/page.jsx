"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";

export default function Search() {
    const [query, setQuery] = useState("");

    const handleInput = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="max-w-7xl text-leaf-50 mx-auto pt-40 flex flex-col items-center gap-16">
            <h2 className="font-serif font-medium text-h2">
                Halo! Ada yang dapat kami bantu?
            </h2>
            <div className="w-1/2">
                <div className="flex flex-row justify-between gap-2 items-center">
                    <input
                        type="text"
                        name=""
                        id=""
                        value={query}
                        onChange={handleInput}
                        placeholder="Ketikkan kata kunci yang ingin dicari..."
                        className="bg-transparent focus:outline-none w-full placeholder:text-earth-500"
                    />
                    <FaMagnifyingGlass className="text-earth-500" />
                </div>
                <span className="block w-full h-[0.1rem] bg-earth-500 mt-3"></span>
                {query && (
                    <div className="w-full h-40 bg-earth-300 text-leaf-950 p-10 rounded-xl mt-5 flex flex-col items-start">
                        <div className="flex flex-col gap-2 w-full">
                            <h3 className="font-serif text-xl font-bold">
                                Tumbuhan Obat dan Simplisia
                            </h3>
                            <Link
                                href="/"
                                className="group bg-earth-200 rounded-lg w-full h-10 py-2 px-6 flex flex-row justify-between items-center"
                            >
                                <span>
                                    Je<span className="font-bold">jamu</span>an
                                </span>
                                <BsArrowRight className="group-hover:-translate-x-1 transition" />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
