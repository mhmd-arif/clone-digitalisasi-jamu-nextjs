import React from "react";
import Card from "@/components/Card";

export default function Simplisia() {
    const cardData = [
        {
            href: "/bahan/simplisia/simplisia1",
            img: "Gambar simplisia 1",
            title: "simplisia 1",
            subtitle: "nama latin simplisia 1",
        },
        {
            href: "/bahan/simplisia/simplisia2",
            img: "Gambar simplisia 2",
            title: "simplisia 2",
            subtitle: "nama latin simplisia 2",
        },
        {
            href: "/bahan/simplisia/simplisia3",
            img: "Gambar simplisia 3",
            title: "simplisia 3",
            subtitle: "nama latin simplisia 3",
        },
        {
            href: "/bahan/simplisia/simplisia4",
            img: "Gambar simplisia 4",
            title: "simplisia 4",
            subtitle: "nama latin simplisia 4",
        },
        {
            href: "/bahan/simplisia/simplisia5",
            img: "Gambar simplisia 5",
            title: "simplisia 5",
            subtitle: "nama latin simplisia 5",
        },
        {
            href: "/bahan/simplisia/simplisia6",
            img: "Gambar simplisia 6",
            title: "simplisia 6",
            subtitle: "nama latin simplisia 6",
        },
    ];

    return (
        <div className="w-10/12 h-full mx-auto flex flex-col items-center gap-6 font-serif">
            <span className="text-h3 text-leaf-900 font-bold pt-4">Simplisia</span>
            <div className="grid grid-cols-4 text-xl text-earth-50 gap-6 w-full">
                {cardData.map((card, index) => (
                    <Card key={index} href={card.href} title={card.title} subtitle={card.subtitle} img={card.img}>
                    </Card>
                ))}
            </div>
        </div>
    )
}