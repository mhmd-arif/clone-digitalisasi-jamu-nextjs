import Back from "@/components/Back";
import React from "react";
import VideoCard from "../VideoCard";

export default function VideoEdukasi() {
    const data = {
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
                id: "lZZmlJM7osE",
            },
            {
                title: "Mengenal Ragam Manfaat Jamu Tradisional untuk Kesehatan",
                description:
                    "Pelajari beragam manfaat kesehatan yang terkandung dalam jamu tradisional dan bagaimana jamu dapat meningkatkan kesejahteraan Anda.",
                id: "lZZmlJM7osE",
            },
        ],
    };
    return (
        <div className="w-full p-24">
            <Back />
            <h1 className="text-h2 text-center font-serif tracking-widest uppercase mb-8">
                Video Edukasi
            </h1>
            <div className="mb-16">
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
            <div className="grid grid-cols-4 gap-12">
                <VideoCard data={data.videoEdukasi[1]} isCol />
                <VideoCard data={data.videoEdukasi[1]} isCol />
                <VideoCard data={data.videoEdukasi[1]} isCol />
                <VideoCard data={data.videoEdukasi[1]} isCol />
                <VideoCard data={data.videoEdukasi[1]} isCol />
                <VideoCard data={data.videoEdukasi[1]} isCol />
            </div>
        </div>
    );
}
