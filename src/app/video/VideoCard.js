import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function VideoCard({ data, isPriority = false, isCol = false }) {
    const { title, description, id } = data;

    return (
        <>
            {isPriority ? (
                <Link href={`/video/${id}`} className="group">
                    <Image
                        src={`https://img.youtube.com/vi/${id}/0.jpg`}
                        width={1000}
                        height={500}
                        alt=""
                        className="object-cover aspect-video rounded-lg transition group-hover:-translate-y-1"
                    />
                    <div className="">
                        <h3 className="mt-4 font-serif text-h3 text-earth-200 transition group-hover:text-earth-100">
                            {title}
                        </h3>
                        <p className="text-earth-400 group-hover:text-earth-300 transition text-base mt-4">
                            {description}
                        </p>
                    </div>
                </Link>
            ) : (
                <Link
                    href={`/video/${id}`}
                    className={`group w-full flex ${
                        isCol ? "flex-col" : ""
                    } items-center gap-4`}
                >
                    <Image
                        src={`https://img.youtube.com/vi/${id}/0.jpg`}
                        width={220}
                        height={220}
                        alt=""
                        className={`${
                            isCol ? "w-full" : ""
                        } group-hover:-translate-y-1 transition object-cover aspect-video rounded-lg`}
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
            )}
        </>
    );
}
