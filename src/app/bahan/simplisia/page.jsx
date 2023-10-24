import React from "react";
import Back from "@/components/Back";
import ListCard from "@/components/ListCard";

export default function Simplisia() {
  const data = {
    jamu: [
      {
        src: "/menu/simplisia.png",
        href: "/bahan/simplisia/id",
        title: "Kunyit Asam",
        description:
          "Ramuan tradisional dengan kunyit dan asam yang kaya antioksidan, baik untuk menjaga kesehatan liver dan pencernaan",
      },
      {
        src: "/menu/simplisia.png",
        href: "/bahan/simplisia/id",
        title: "Beras Kencur",
        description:
          "Minuman herbal yang mengandung kencur dan beras, membantu meredakan masalah perut dan memberikan energi",
      },
      {
        src: "/menu/simplisia.png",
        href: "/bahan/simplisia/id",
        title: "Temulawak",
        description:
          "Jamu dengan temulawak sebagai bahan/simplisia utama, memiliki sifat antiinflamasi dan memperkuat sistem kekebalan tubuh",
      },
      {
        src: "/menu/simplisia.png",
        href: "/bahan/simplisia/id",
        title: "Jahe Merah",
        description:
          "Jahe merah yang berkhasiat dalam menjaga kesehatan jantung dan meningkatkan sirkulasi darah",
      },
      {
        src: "/menu/simplisia.png",
        href: "/bahan/simplisia/id",
        title: "Sirih Daun Betel",
        description:
          "Kombinasi sirih dan daun betel, digunakan untuk penyegaran napas dan menjaga kesehatan mulut",
      },
      {
        src: "/menu/simplisia.png",
        href: "/bahan/simplisia/id",
        title: "Beras Kencur",
        description:
          "Minuman herbal yang mengandung kencur dan beras, membantu meredakan masalah perut dan memberikan energi",
      },
    ],
  };

  return (
    <div className="max-w-7xl py-24 mx-auto">
      <Back />
      <h1 className="text-h2 text-center font-serif tracking-widest mb-8">
        Simplisia
      </h1>
      <div className="grid grid-cols-4 gap-12 py-6">
        <ListCard data={data.jamu[0]} />
        <ListCard data={data.jamu[1]} />
        <ListCard data={data.jamu[2]} />
        <ListCard data={data.jamu[3]} />
        <ListCard data={data.jamu[4]} />
        <ListCard data={data.jamu[5]} />
      </div>
    </div>
  );
}
