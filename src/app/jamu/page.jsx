import Back from "@/components/Back";
import React from "react";
import ListCard from "./ListCard";

export default function Jamu() {
  const data = {
    jamu: [
      {
        src: "/menu/jamu.png",
        title: "Kunyit Asam",
        description:
          "Ramuan tradisional dengan kunyit dan asam yang kaya antioksidan, baik untuk menjaga kesehatan liver dan pencernaan",
      },
      {
        src: "/menu/jamu.png",
        title: "Beras Kencur",
        description:
          "Minuman herbal yang mengandung kencur dan beras, membantu meredakan masalah perut dan memberikan energi",
      },
      {
        src: "/menu/jamu.png",
        title: "Temulawak",
        description:
          "Jamu dengan temulawak sebagai bahan utama, memiliki sifat antiinflamasi dan memperkuat sistem kekebalan tubuh",
      },
      {
        src: "/menu/jamu.png",
        title: "Jahe Merah",
        description:
          "Jahe merah yang berkhasiat dalam menjaga kesehatan jantung dan meningkatkan sirkulasi darah",
      },
      {
        src: "/menu/jamu.png",
        title: "Sirih Daun Betel",
        description:
          "Kombinasi sirih dan daun betel, digunakan untuk penyegaran napas dan menjaga kesehatan mulut",
      },
      {
        src: "/menu/jamu.png",
        title: "Beras Kencur",
        description:
          "Minuman herbal yang mengandung kencur dan beras, membantu meredakan masalah perut dan memberikan energi",
      },
    ],
  };

  return (
    <div className="w-full p-24">
      <Back />
      <div className="grid grid-cols-4 gap-12 py-12">
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
