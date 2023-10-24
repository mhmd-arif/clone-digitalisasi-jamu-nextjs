import Back from "@/components/Back";
import Image from "next/image";
import React from "react";
import Card from "@/components/Card";

export default function DetailTumbuhanObat() {
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
        <div className="max-w-7xl text-white mx-auto py-24">
            <Back />
            <div className="flex flex-row justify-center gap-10 my-10">
                <div className="w-2/5">
                    <Image
                        src={"/Basil.png"}
                        width={1000}
                        height={1000}
                        className="sticky top-40 bg-earth-300 rounded-xl"
                    />
                </div>
                <div className="w-3/5 flex flex-col gap-5">
                    <div className="flex flex-row">
                        <h1 className="text-h2 font-serif text-earth-200">
                            Uci-uci
                            <span className="text-sm italic text-earth-500 font-serif pl-6">
                                (Basella alba L.)
                            </span>
                        </h1>
                    </div>
                    <div className="flex flex-col gap-6 h-2/3">
                        <div>
                            <h3 className="text-earth-500 font-serif tracking-widest uppercase mb-1">
                                Suku
                            </h3>
                            <p className="text-earth-200 flex flex-col gap-2 text-base italic">
                                Basellaceae
                            </p>
                        </div>
                        <div>
                            <h3 className="text-earth-500 font-serif tracking-widest uppercase mb-1">
                                Sinonim
                            </h3>
                            <p className="text-earth-200 flex flex-col gap-2 text-base italic">
                                Basella rubra L., B. cordifolia Lamk., B. lucida L.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-earth-500 font-serif tracking-widest uppercase mb-1">
                                Nama Lokal
                            </h3>
                            <p className="text-earth-200 flex flex-col gap-2 text-base">
                                Gendola (Indonesia), Lembayung (Minangkabau), Gondola (Sunda), Genjerot, Gedrek, 
                                Uci-uci (Jawa), Kandula (Madura), Gendola (Bali), Tatabuwe (Sulawesi Utara), 
                                Poiloo (Gorontalo), Rinutu (Ulias), Duyu numuno (Buol), Kandola (Timor)
                            </p>
                        </div>
                        <div>
                            <h3 className="text-earth-500 font-serif tracking-widest uppercase mb-1">
                                Pencirian
                            </h3>
                            <p className="text-earth-200 flex flex-col gap-2 text-base">
                                Berupa tumbuhan berhabitus terna, batang lunak, bulat, berwarna merah atau hijau, merambat sampai 10 m; 
                                helaian daun tunggal,   bentuk daun elip sampai membulat, tangkai daun 0,2-1,8 cm, panjang 1,3-8 cm, lebar 1-6,8 cm, 
                                pangkal daun tumpul sampai menjantung, tepi rata, ujung tumpul, pertulangan daun menyirip, licin dan agak tebal,  
                                warna helaian daun hijau sampai hijau kemerahan; bunga majemuk  bulir, panjang ibu tangkai bunga 3-20 cm, 
                                daun penumpu memanjang, perhiasan bunga putih sampai kemerahan-keunguan, bentuk bulat telur sampai bulat telur memanjang, 
                                tangkai sari putih, kepala putik kuning, buah Ketika masak berwarna merah sampai kehitaman, diameter buah diameter 5-6 mm, buah berair, keunguan ketika diremas.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-earth-500 font-serif tracking-widest uppercase mb-1">
                                Manfaat
                            </h3>
                            <p className="text-earth-200 flex flex-col gap-2 text-base">
                                Daun digunakan untuk mengobati borok, bisul, susah buang air besar; getah daun untuk selesma; getah buah berwarna keunguan digunakan untuk radang selaput mata; akar digunakan untuk diare 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-earth-500 font-serif tracking-widest uppercase mb-1">
                    Tumbuhan Obat Serupa
                </h3>
                <div className="flex flex-row text-xl text-earth-50 gap-6 overflow-auto">
                    {cardData.map((card, index) => (
                        <Card
                        key={index}
                        href={card.href}
                        title={card.title}
                        subtitle={card.subtitle}
                        img={card.img}
                        className="w-60 mb-1"
                        ></Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
