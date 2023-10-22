import React from "react";
import Card from "@/components/Card";
import Link from "next/link";
import Back from "@/components/Back";

export default function Simplisia() {
  const cardData = [
    {
      href: "/bahan/simplisia/simplisia1",
      img: "https://i.postimg.cc/BQPvwSh5/ginger-2022-12-15-21-43-47-utc-transformed-1.png",
      title: "simplisia 1",
      subtitle: "nama latin simplisia 1",
    },
    {
      href: "/bahan/simplisia/simplisia2",
      img: "https://i.postimg.cc/BQPvwSh5/ginger-2022-12-15-21-43-47-utc-transformed-1.png",
      title: "simplisia 2",
      subtitle: "nama latin simplisia 2",
    },
    {
      href: "/bahan/simplisia/simplisia3",
      img: "https://i.postimg.cc/BQPvwSh5/ginger-2022-12-15-21-43-47-utc-transformed-1.png",
      title: "simplisia 3",
      subtitle: "nama latin simplisia 3",
    },
    {
      href: "/bahan/simplisia/simplisia4",
      img: "https://i.postimg.cc/BQPvwSh5/ginger-2022-12-15-21-43-47-utc-transformed-1.png",
      title: "simplisia 4",
      subtitle: "nama latin simplisia 4",
    },
    {
      href: "/bahan/simplisia/simplisia5",
      img: "https://i.postimg.cc/BQPvwSh5/ginger-2022-12-15-21-43-47-utc-transformed-1.png",
      title: "simplisia 5",
      subtitle: "nama latin simplisia 5",
    },
    {
      href: "/bahan/simplisia/simplisia6",
      img: "https://i.postimg.cc/BQPvwSh5/ginger-2022-12-15-21-43-47-utc-transformed-1.png",
      title: "simplisia 6",
      subtitle: "nama latin simplisia 6",
    },
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto ">
      <Back />
      <div className="flex flex-col items-center gap-6 font-serif">
        <div className="flex gap-x-8 text-earth-300 font-bold pt-4 justify-center items-center border-b-[1px] ">
          <Link
            href="/bahan/tumbuhan-obat"
            className="flex flex-col hover:scale-105 transform duration-300 ease-out text-h3 text-earth-50"
          >
            <span>Tumbuhan Obat</span>
          </Link>

          <Link
            href="/bahan/simplisia"
            className="flex flex-col hover:scale-105 transform duration-300 ease-out text-h3"
          >
            <span className="underline underline-offset-[10px] decoration-4">
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
    </div>
  );
}
