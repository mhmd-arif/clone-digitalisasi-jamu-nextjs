import Back from "@/components/Back";
import Image from "next/image";
import React from "react";

export default function DetailNaskahKuno() {
    return (
        <div className="px-24 w-full text-white mx-auto py-24">
            <Back />
            <div className="text-center mb-16">
                <h1 className="text-h2 font-serif text-earth-200">Jejamuan</h1>
                <h2 className="text-sm italic text-leaf-500">
                    Surat Centhini hlm. 5
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-16">
                <div className="h-full">
                    <Image
                        src={"/menu/naskah-kuno.png"}
                        width={500}
                        height={1000}
                        className="sticky top-16"
                    />
                </div>
                <div className="">
                    <h3 className="text-earth-500 font-serif tracking-widest uppercase mb-8">
                        Terjemahan Bahasa Jawa
                    </h3>
                    <div className="text-earth-300 flex flex-col gap-4 text-base italic">
                        <p>
                            Wong Jawa wis teka jamu minangka bagian saka tradisi
                            kanggo ngobati ragane. Jamune saiki wis iso
                            ditemtokake karo cara sing luwih modern nggunakake
                            teknologi. Jamu iki lumrah banget bisa nambah energi
                            lan ngurangi rasa lelah.
                        </p>
                        <p>
                            Jamu ora cuma dianggep minuman sehat, nanging uga
                            akèh sing percaya yen jamu duwe kekuatan magis kang
                            bisa nyembuhake panas dalam lan masalah kesehatan
                            liyane. Ing karajaan Jawa kuna, para raja lan
                            bangsawan sing mboten bisa kelangan jamu minangka
                            bahan sing penting kanggo njaga kesehatan lan
                            stamina.
                        </p>
                        <p>
                            Ing zamane saiki, jamu wis dikembangkan lan
                            dipasarkake luwih luas, lan ora cetha adheg kanggo
                            urip sing sehat. Jamu iki wis bisa ditemtokake dene
                            metode sing luwih modern, saka produksi masal
                            nganggo teknologi mutakhir. Kene wong Jawa sing apik
                            ora lali tumuju apotek jamu kanggo njupuk jamu kang
                            cocog kanggo kondisi kesehatan sing didumung ing
                            soko jamu tradisional. Dene ora kabeh jamu iso
                            ditemtokake nggunakake berbagai rasa, saka manis,
                            pedas, saji, lan nutupi saget manawa kita bisa
                            nikmati jamu kanthi bebas lan gampang."
                        </p>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-earth-500 font-serif tracking-widest uppercase mb-8">
                        Terjemahan Bahasa Indonesia
                    </h3>
                    <div className="text-earth-300 flex flex-col gap-4 text-base">
                        <p>
                            Orang Jawa telah lama menggunakan jamu sebagai
                            bagian dari tradisi untuk mengobati tubuh mereka.
                            Jamu sekarang sudah dapat ditemukan dengan cara yang
                            lebih modern menggunakan teknologi. Jamu ini umum
                            digunakan untuk meningkatkan energi dan mengurangi
                            rasa lelah.
                        </p>
                        <p>
                            Jamu tidak hanya dianggap sebagai minuman sehat,
                            tetapi juga banyak yang percaya bahwa jamu memiliki
                            kekuatan magis yang dapat mengatasi panas dalam dan
                            masalah kesehatan lainnya. Di zaman kerajaan Jawa
                            kuno, para raja dan bangsawan tidak bisa mengabaikan
                            jamu sebagai bahan penting untuk menjaga kesehatan
                            dan stamina.
                        </p>
                        <p>
                            Di zaman sekarang, jamu telah berkembang dan
                            dipasarkan lebih luas, dan menjadi bagian tak
                            terpisahkan dari gaya hidup sehat. Jamu sekarang
                            dapat ditemukan dengan cara yang lebih modern,
                            diproduksi secara massal dengan menggunakan
                            teknologi mutakhir. Orang Jawa yang bijak tidak lupa
                            mengunjungi apotek jamu untuk memilih jamu yang
                            sesuai dengan kondisi kesehatan mereka dari berbagai
                            rasa, mulai dari manis, pedas, asam, dan lain-lain,
                            sehingga kita dapat menikmati jamu dengan mudah dan
                            leluasa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
