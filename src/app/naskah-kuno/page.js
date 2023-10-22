import Back from "@/components/Back";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function NaskahKuno() {
    return (
        <div className="py-24 max-w-7xl mx-auto">
            <Back />
            <h1 className="mb-16 font-serif text-earth-200 text-center text-h2 tracking-widest uppercase">
                Naskah Kuno
            </h1>
            <div className="flex flex-col gap-12">
                <RamuanLink ramuan="Jamu" sumber="Surat Centhini hlm. 5" />
                <RamuanLink ramuan="Kawista" sumber="Surat Centhini hlm. 5" />
                <RamuanLink
                    ramuan="Kencur"
                    sumber="Carita Parahyangan hlm. 7"
                />
                <RamuanLink
                    ramuan="Temulawak"
                    sumber="Surat Centhini hlm. 11"
                />
            </div>
        </div>
    );
}

const RamuanLink = ({ ramuan, sumber }) => {
    return (
        <Link
            href={"/naskah-kuno/jamu"}
            className="group flex items-center justify-between pb-4 border-b border-earth-400 text-white"
        >
            <div className="flex items-center">
                <h2 className="inline-block font-serif text-earth-200 text-h2 w-64">
                    {ramuan}
                </h2>
                <h3 className="inline-block font-serif text-xl text-earth-400 italic">
                    {sumber}
                </h3>
            </div>
            <BsArrowRight className="text-h3 text-earth-200 group-hover:-translate-x-2 transition-transform" />
        </Link>
    );
};
