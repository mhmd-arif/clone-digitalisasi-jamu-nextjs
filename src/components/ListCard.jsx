import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ListCard({ data }) {
  const { title, description, src, href } = data;

  return (
    <>
      <Link
        href={href}
        className="group w-full flex flex-col items-center gap-4"
      >
        <Image
          src={src}
          width={220}
          height={220}
          className="w-full group-hover:-translate-y-1 transition object-cover aspect-video rounded-lg"
          alt="gambar"
        />
        <div className="">
          <h3
            className={`font-serif text-base  text-earth-200 group-hover:text-earth-100 transition`}
          >
            {title}
          </h3>
          <p
            className={`text-earth-500 group-hover:text-earth-400 transition text-sm mt-2`}
          >
            {description}
          </p>
        </div>
      </Link>
    </>
  );
}
