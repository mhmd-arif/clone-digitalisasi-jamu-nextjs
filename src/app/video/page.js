import Image from "next/image";
import Link from "next/link";
import React from "react";
import VideoCard from "./VideoCard";
import Back from "@/components/Back";

export default function Video() {
    const data = {
        videoPopuler: [
            {
                id: "B-72s_swHMk",
                title: "Pengabdian Masyarakat Desa Pagerharjo",
                description:
                    "Pelajari beragam manfaat kesehatan yang terkandung dalam jamu tradisional dan bagaimana jamu dapat meningkatkan kesejahteraan Anda",
            },
            {
                title: "Tanaman Herbal untuk Menurunkan Kolesterol",
                description:
                    "Pelajari tentang tanaman herbal yang dapat membantu menurunkan kadar kolesterol Anda secara alami",
                id: "lZZmlJM7osE",
            },
            {
                title: "Teknik Pijat Tradisional untuk Mengatasi Pegal-pegal",
                description:
                    "Jelajahi teknik pijat tradisional yang dapat membantu mengurangi pegal-pegal dan ketegangan otot.",
                id: "47cz1XE-mzQ",
            },
            {
                title: "Mengenal Ragam Manfaat Jamu Tradisional untuk Kesehatan",
                description:
                    "Pelajari beragam manfaat kesehatan yang terkandung dalam jamu tradisional dan bagaimana jamu dapat meningkatkan kesejahteraan Anda.",
                id: "wEaLbnavsmA",
            },
        ],
        videoEdukasi: [
            {
                id: "B-72s_swHMk",
                title: "Pengabdian Masyarakat Desa Pagerharjo",
                description:
                    "Pelajari beragam manfaat kesehatan yang terkandung dalam jamu tradisional dan bagaimana jamu dapat meningkatkan kesejahteraan Anda",
            },
            {
                title: "Tanaman Herbal untuk Menurunkan Kolesterol",
                description:
                    "Pelajari tentang tanaman herbal yang dapat membantu menurunkan kadar kolesterol Anda secara alami",
                id: "lZZmlJM7osE",
            },
            {
                title: "Teknik Pijat Tradisional untuk Mengatasi Pegal-pegal",
                description:
                    "Jelajahi teknik pijat tradisional yang dapat membantu mengurangi pegal-pegal dan ketegangan otot.",
                id: "47cz1XE-mzQ",
            },
            {
                title: "Mengenal Ragam Manfaat Jamu Tradisional untuk Kesehatan",
                description:
                    "Pelajari beragam manfaat kesehatan yang terkandung dalam jamu tradisional dan bagaimana jamu dapat meningkatkan kesejahteraan Anda.",
                id: "wEaLbnavsmA",
            },
        ],
    };

    return (
        <div className="w-full p-24">
            <Back />
            <h1 className="text-h2 text-center font-serif tracking-widest uppercase mb-8">
                Video
            </h1>
            <div className="mb-16">
                <div className="mb-8">
                    <h2 className="inline-block text-h3 font-semibold text-earth-200 font-serif">
                        Video Edukasi
                    </h2>
                    <Link
                        href={"/video/edukasi"}
                        className="ml-6 text-earth-500 hover:text-earth-300 transition-colors"
                    >
                        Lihat selengkapnya {">"}
                    </Link>
                </div>

                <div className="grid grid-cols-12 gap-12">
                    <div className="col-span-7">
                        <VideoCard isPriority data={data.videoEdukasi[0]} />
                    </div>
                    <div className="col-span-5 flex flex-col gap-8">
                        <VideoCard data={data.videoEdukasi[1]} />
                        <VideoCard data={data.videoEdukasi[2]} />
                        <VideoCard data={data.videoEdukasi[3]} />
                    </div>
                </div>
            </div>
            <div className="mb-16">
                <div className="mb-8">
                    <h2 className="inline-block text-h3 font-semibold text-earth-200 font-serif">
                        Video Populer
                    </h2>
                    <Link
                        href={"/video/populer"}
                        className="ml-6 text-earth-500 hover:text-earth-300 transition-colors"
                    >
                        Lihat selengkapnya {">"}
                    </Link>
                </div>

                <div className="grid grid-cols-12 gap-12">
                    <div className="col-span-7">
                        <VideoCard isPriority data={data.videoPopuler[0]} />
                    </div>
                    <div className="col-span-5 flex flex-col gap-8">
                        <VideoCard data={data.videoPopuler[1]} />
                        <VideoCard data={data.videoPopuler[2]} />
                        <VideoCard data={data.videoPopuler[3]} />
                    </div>
                </div>
            </div>
        </div>
    );
}
