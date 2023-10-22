import React from "react";
import Card from "@/components/Card";
import Link from "next/link";

export default function TumbuhanObat() {
  const cardData = [
    {
      href: "/bahan/tumbuhanobat/tumbuhanobat1",
      img: "https://i.postimg.cc/BQPvwSh5/ginger-2022-12-15-21-43-47-utc-transformed-1.png",
      title: "tumbuhan obat 1",
      subtitle: "nama latin tumbuhan obat 1",
    },
    {
      href: "/bahan/tumbuhanobat/tumbuhanobat2",
      img: "https://i.postimg.cc/BQPvwSh5/ginger-2022-12-15-21-43-47-utc-transformed-1.png",
      title: "tumbuhan obat 2",
      subtitle: "nama latin tumbuhan obat 2",
    },
    {
      href: "/bahan/tumbuhanobat/tumbuhanobat3",
      img: "https://i.postimg.cc/BQPvwSh5/ginger-2022-12-15-21-43-47-utc-transformed-1.png",
      title: "tumbuhan obat 3",
      subtitle: "nama latin tumbuhan obat 3",
    },
    {
      href: "/bahan/tumbuhanobat/tumbuhanobat4",
      img: "https://i.postimg.cc/BQPvwSh5/ginger-2022-12-15-21-43-47-utc-transformed-1.png",
      title: "tumbuhan obat 4",
      subtitle: "nama latin tumbuhan obat 4",
    },
    {
      href: "/bahan/tumbuhanobat/tumbuhanobat5",
      img: "https://i.postimg.cc/BQPvwSh5/ginger-2022-12-15-21-43-47-utc-transformed-1.png",
      title: "tumbuhan obat 5",
      subtitle: "nama latin tumbuhan obat 5",
    },
    {
      href: "/bahan/tumbuhanobat/tumbuhanobat6",
      img: "https://i.postimg.cc/BQPvwSh5/ginger-2022-12-15-21-43-47-utc-transformed-1.png",
      title: "tumbuhan obat 6",
      subtitle: "nama latin tumbuhan obat 6",
    },
    {
      href: "/bahan/tumbuhanobat/tumbuhanobat7",
      img: "https://i.postimg.cc/BQPvwSh5/ginger-2022-12-15-21-43-47-utc-transformed-1.png",
      title: "tumbuhan obat 7",
      subtitle: "nama latin tumbuhan obat 7",
    },
  ];

  return (
    <div className="w-10/12 h-full mx-auto flex flex-col items-center gap-6 font-serif">
      <span className="self-start text-base"> home/bahan/tumbuhanobat</span>
      <div className="flex gap-x-2">
        <Link href="/bahan/tumbuhan-obat">
          <span className="text-h3 text-leaf-900 font-bold pt-4">
            Tumbuhan Obat
          </span>
        </Link>

        <Link href="/bahan/simplisia">
          <span className="text-h3 text-leaf-900 font-bold pt-4">
            Simplisia
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-4 text-xl text-earth-50 gap-6 w-full">
        {cardData.map((card, index) => (
          <Card
            key={index}
            href={card.href}
            title={card.title}
            subtitle={card.subtitle}
            img={card.img}
          ></Card>
        ))}
      </div>
    </div>
  );
}
