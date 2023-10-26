import Back from "@/components/Back";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Video() {
    return (
        <div className="w-full p-24">
            <Back />
            <div className="my-8">
                <div className="grid grid-cols-12 gap-12">
                    <div className="col-span-9">
                        <iframe
                            width="100%"
                            height="500"
                            src="https://www.youtube.com/embed/B-72s_swHMk?si=yLkc1so4OCzcdyeg"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                        <div className="">
                            <h1 className="mt-4 font-serif text-h3 font-earth-200">
                                Pengabdian Masyarakat Desa Pagerharjo
                            </h1>
                            <p className="text-earth-300 text-base mt-4">
                                Pelajari beragam manfaat kesehatan yang
                                terkandung dalam jamu tradisional dan bagaimana
                                jamu dapat meningkatkan kesejahteraan Anda
                            </p>
                        </div>
                    </div>
                    <div className="col-span-3 w-full">
                        <h3 className="font-serif text-earth-300 text-lg mb-4">
                            Video Relevan
                        </h3>
                        <div className="flex flex-col gap-8">
                            <VideoCard
                                title="Tanaman Herbal untuk Menurunkan Kolesterol"
                                id="47cz1XE-mzQ"
                            />
                            <VideoCard
                                title="Teknik Pijat Tradisional untuk Mengatasi Pegal-pegal"
                                id="93rdOi79Tnw"
                            />
                            <VideoCard
                                title="Mengenal Ragam Manfaat Jamu Tradisional untuk Kesehatan"
                                id="lZZmlJM7osE"
                            />
                            <VideoCard
                                title="Tanaman Herbal untuk Menurunkan Kolesterol"
                                id="47cz1XE-mzQ"
                            />
                            <VideoCard
                                title="Teknik Pijat Tradisional untuk Mengatasi Pegal-pegal"
                                id="93rdOi79Tnw"
                            />
                            <VideoCard
                                title="Mengenal Ragam Manfaat Jamu Tradisional untuk Kesehatan"
                                id="lZZmlJM7osE"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const VideoCard = ({ title, description, id }) => {
    return (
        <div className="w-full flex items-center gap-4">
            <Image
                src={`https://img.youtube.com/vi/${id}/0.jpg`}
                width={130}
                height={100}
                alt=""
                style={{ aspectRatio: "16/9", objectFit: "cover" }}
            />
            <div className="">
                <h3 className="font-serif text-xs mb-4 text-earth-400">
                    {title}
                </h3>
            </div>
        </div>
    );
};
