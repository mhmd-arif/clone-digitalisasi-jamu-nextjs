import Back from "@/components/Back";
import ListCard from "@/components/ListCard";
import Image from "next/image";
import React from "react";

export default function Jamu() {
  const data = {
    jamu: [
      {
        src: "/menu/jamu.png",
        href: "/jamu/id",
        title: "Beras Kencur",
        description:
          "Minuman herbal yang mengandung kencur dan beras, membantu meredakan masalah perut dan memberikan energi",
      },
      {
        src: "/menu/jamu.png",
        href: "/jamu/id",
        title: "Temulawak",
        description:
          "Jamu dengan temulawak sebagai bahan utama, memiliki sifat antiinflamasi dan memperkuat sistem kekebalan tubuh",
      },
      {
        src: "/menu/jamu.png",
        href: "/jamu/id",
        title: "Jahe Merah",
        description:
          "Jahe merah yang berkhasiat dalam menjaga kesehatan jantung dan meningkatkan sirkulasi darah",
      },
      {
        src: "/menu/jamu.png",
        href: "/jamu/id",
        title: "Sirih Daun Betel",
        description:
          "Kombinasi sirih dan daun betel, digunakan untuk penyegaran napas dan menjaga kesehatan mulut",
      },
      {
        src: "/menu/jamu.png",
        href: "/jamu/id",
        title: "Beras Kencur",
        description:
          "Minuman herbal yang mengandung kencur dan beras, membantu meredakan masalah perut dan memberikan energi",
      },
    ],
  };

  return (
    <div className="max-w-7xl text-white mx-auto py-24">
      <Back />
      <div className="flex flex-row justify-center gap-10 my-10">
        <div className="w-2/5">
          <Image
            src={"/menu/jamu.png"}
            width={1000}
            height={1000}
            className="sticky top-40 bg-earth-300 rounded-xl"
          />
        </div>
        <div className="w-3/5 flex flex-col gap-4">
          <div className="flex flex-row">
            <h1 className="text-h2 font-serif text-earth-200 font-bold">
              Kunyit Asam
              <span className="text-base italic text-earth-500 font-serif pl-6 tracking-widest font-normal">
                Kunyit Asam.
              </span>
            </h1>
          </div>
          <div className="flex flex-col gap-6 h-2/3">
            <div>
              <h3 className="text-earth-500 font-serif tracking-widest uppercase mb-1">
                Deskripsi
              </h3>
              <p className="text-earth-200 flex flex-col gap-2 text-base">
                Berupa tumbuhan berhabitus terna, batang lunak, bulat, berwarna
                merah atau hijau, merambat sampai 10 m; helaian daun tunggal,
                bentuk daun elip sampai membulat, tangkai daun 0,2-1,8 cm,
                panjang 1,3-8 cm, lebar 1-6,8 cm, pangkal daun tumpul sampai
                menjantung, tepi rata, ujung tumpul, pertulangan daun menyirip,
                licin dan agak tebal, warna helaian daun hijau sampai hijau
                kemerahan; bunga majemuk bulir, panjang ibu tangkai bunga 3-20
                cm, daun penumpu memanjang, perhiasan bunga putih sampai
                kemerahan-keunguan, bentuk bulat telur sampai bulat telur
                memanjang, tangkai sari putih, kepala putik kuning, buah Ketika
                masak berwarna merah sampai kehitaman, diameter buah diameter
                5-6 mm, buah berair, keunguan ketika diremas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-earth-500 font-serif tracking-widest uppercase mb-1">
          Jamu lainnya
        </h3>
        <div className="grid grid-cols-4 gap-12 py-12">
          <ListCard data={data.jamu[0]} />
          <ListCard data={data.jamu[1]} />
          <ListCard data={data.jamu[2]} />
          <ListCard data={data.jamu[3]} />
          <ListCard data={data.jamu[4]} />
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
        style={{ aspectRatio: "16/9", objectFit: "cover" }}
      />
      <div className="">
        <h3 className="font-serif text-xs mb-4 text-earth-400">{title}</h3>
      </div>
    </div>
  );
};
