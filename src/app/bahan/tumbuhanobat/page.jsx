import React from "react";
import Card from "@/components/Card";

export default function TumbuhanObat() {
    const cardData = [
        {
            href: "/bahan/tumbuhanobat/tumbuhanobat1",
            img: "Gambar tumbuhanobat 1",
            title: "tumbuhanobat 1",
            subtitle: "nama latin tumbuhanobat 1",
        },
        {
            href: "/bahan/tumbuhanobat/tumbuhanobat2",
            img: "Gambar tumbuhanobat 2",
            title: "tumbuhanobat 2",
            subtitle: "nama latin tumbuhanobat 2",
        },
        {
            href: "/bahan/tumbuhanobat/tumbuhanobat3",
            img: "Gambar tumbuhanobat 3",
            title: "tumbuhanobat 3",
            subtitle: "nama latin tumbuhanobat 3",
        },
        {
            href: "/bahan/tumbuhanobat/tumbuhanobat4",
            img: "Gambar tumbuhanobat 4",
            title: "tumbuhanobat 4",
            subtitle: "nama latin tumbuhanobat 4",
        },
        {
            href: "/bahan/tumbuhanobat/tumbuhanobat5",
            img: "Gambar tumbuhanobat 5",
            title: "tumbuhanobat 5",
            subtitle: "nama latin tumbuhanobat 5",
        },
        {
            href: "/bahan/tumbuhanobat/tumbuhanobat6",
            img: "Gambar tumbuhanobat 6",
            title: "tumbuhanobat 6",
            subtitle: "nama latin tumbuhanobat 6",
        },
        {
            href: "/bahan/tumbuhanobat/tumbuhanobat7",
            img: "Gambar tumbuhanobat 7",
            title: "tumbuhanobat 7",
            subtitle: "nama latin tumbuhanobat 7",
        },
    ];

    return (
        <div className="w-10/12 h-full mx-auto flex flex-col items-center gap-6 font-serif">
            <span className="text-h3 text-leaf-900 font-bold pt-4">Tumbuhan Obat </span>
            <div className="grid grid-cols-4 text-xl text-earth-50 gap-6 w-full">
                {cardData.map((card, index) => (
                    <Card key={index} href={card.href} title={card.title} subtitle={card.subtitle} img={card.img}>
                    </Card>
                ))}
            </div>
        </div>
    )
}