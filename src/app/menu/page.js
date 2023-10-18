import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Menu() {
    return (
        <div className="bg-leaf-950 py-32 pb-12 px-16 w-screen h-full flex items-center gap-4 overflow-hidden">
            <LinkCard href={"/bahan"} src={"/menu/simplisia.png"}>
                <span className="tracking-widest uppercase">Tumbuhan Obat</span>{" "}
                dan <span className="tracking-widest uppercase">Simplisia</span>
            </LinkCard>
            <LinkCard href={"/naskah-kuno"} src={"/menu/naskah-kuno.png"}>
                <span className="tracking-widest uppercase">Naskah Kuno</span>
            </LinkCard>
            <LinkCard href={"/jamu"} src={"/menu/jamu.png"}>
                <span className="tracking-widest uppercase">Jamu</span>
            </LinkCard>
            <LinkCard href={"/video"} src={"/menu/video.png"}>
                <span className="tracking-widest uppercase">Video</span>
            </LinkCard>
        </div>
    );
}

const LinkCard = ({ href, src, children }) => {
    return (
        <Link
            href={href}
            className="hover:-translate-y-5 transition-all relative bg-black px-12 w-1/4 h-full max-h-[750px] rounded-2xl overflow-hidden text-stone-100 grid place-items-center"
        >
            <Image src={src} fill objectFit="cover" className="" />
            <div className="relative font-serif text-h2 text-center text-leaf-100">
                {children}
            </div>
        </Link>
    );
};
