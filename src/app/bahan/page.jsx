import React from "react";
import Link from "next/link";

export default function Bahan() {
    return (
        <div className="w-10/12 mx-auto flex flex-col items-center gap-6 font-serif">
            <span className="text-h3 text-leaf-900 font-bold pt-4">Tumbuhan Obat & Simplisia</span>
            <div className="flex flex-row justify-center gap-16 text-h2 text-earth-50">
                <Link href="/bahan/tumbuhanobat">
                    <div className="flex h-[60vh] w-[50vh] bg-leaf-700 rounded-xl justify-center items-center hover:scale-105 transform duration-300 ease-out">
                        Tumbuhan Obat
                    </div>
                </Link>
                <Link href="/bahan/simplisia">
                    <div className="flex h-[60vh] w-[50vh] bg-leaf-700 rounded-xl justify-center items-center hover:scale-105 transform duration-300 ease-out">
                        Simplisia
                    </div>
                </Link>
            </div>
        </div>
    ) 
}
