import React from "react";
import Card from "@/components/Card";
import Link from "next/link";
import Back from "@/components/Back";

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
    <div className="py-24 max-w-7xl mx-auto ">
      <Back />
      <div className="flex flex-col items-center gap-6 font-serif">
        <div className="flex gap-x-8 text-earth-300 font-bold pt-4 justify-center items-center border-b-[1px] ">
          <Link
            href="/bahan/tumbuhan-obat"
            className="flex flex-col hover:scale-105 transform duration-300 ease-out text-h3"
          >
            <span className="underline underline-offset-[10px] decoration-4">
              Tumbuhan Obat
            </span>
          </Link>

          <Link
            href="/bahan/simplisia"
            className="flex flex-col hover:scale-105 transform duration-300 ease-out text-h3 text-earth-50"
          >
            <span>Simplisia</span>
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
    </div>
  );
}
