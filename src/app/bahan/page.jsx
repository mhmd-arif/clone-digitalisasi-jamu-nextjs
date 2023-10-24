import React from "react";
import Link from "next/link";
import Back from "@/components/Back";
import Image from "next/image";

export default function Bahan() {
  return (
    <div className="max-w-7xl text-white mx-auto pt-24">
      <Back />

      <div className="py-20 px-16 flex items-center justify-center gap-8 overflow-hidden ">
        <LinkCard
          href={"/bahan/tumbuhan-obat"}
          src={"/menu/simplisia.png"}
          title={"Tumbuhan Obat"}
          desc={
            "Tumbuhan obat adalah tanaman yang digunakan secara tradisional atau medis untuk tujuan pengobatan."
          }
        ></LinkCard>
        <LinkCard
          href={"/bahan/simplisia"}
          src={"/menu/jamu.png"}
          title={"Simplisia"}
          desc={
            "Simplisia adalah istilah yang merujuk pada bahan baku tumbuhan atau hewan yang digunakan dalam pembuatan obat."
          }
        ></LinkCard>
      </div>
    </div>
  );
}

const LinkCard = ({ href, src, title, desc, children }) => {
  return (
    <Link
      href={href}
      className="grid place-items-center group hover:-translate-y-5 transform duration-300 ease-out transition-all relative px-12 w-[30rem] h-[42rem] rounded-2xl overflow-hidden text-stone-100  "
    >
      <Image
        src={src}
        fill
        objectFit="cover"
        className="brightness-[0.7]"
        alt="cover category"
      />
      <div className="group-hover:-translate-y-3 transition-all relative text-h2 text-center text-leaf-100 font-serif">
        <div className="grid grid-rows-2 place-items-center h-[40rem]">
          <h2 className="text-h1 self-end"> {title} </h2>
          <p className="text-xl self-start pt-[8rem]">{desc}</p>
        </div>
      </div>
    </Link>
  );
};
