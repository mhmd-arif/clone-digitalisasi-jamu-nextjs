import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Card({
  children,
  href,
  img = "img",
  title = "title",
  subtitle = "subtitle",
  className = " h-56 bg-leaf-700 rounded-xl justify-center items-center hover:scale-105 transform duration-300 ease-out",
}) {
  return (
    <Link href={href}>
      <div className={className}>
        <div className="flex h-40 bg-earth-300 rounded-lg justify-center items-center max-w-[220px] max-h-[140px] overflow-hidden">
          <Image width={220} height={220} src={img} alt="gambar" />
        </div>
        <div className="flex flex-col pl-4 pt-2 font-serif ">
          <div className="font-bold text-lg ">{title}</div>
          <div className="mt-[-5px] text-base">{subtitle}</div>
        </div>
      </div>
    </Link>
  );
}
