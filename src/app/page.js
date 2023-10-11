import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
    return (
        <div className="w-10/12 h-full mx-auto grid place-items-center">
            <Image
                src="/Artemisia.png"
                width={1800}
                height={1800}
                alt="Picture of artemisia"
                className="absolute -bottom-3/4 -left-96 select-none pointer-events-none"
            />
            <div
                className="text-center max-w-3xl bg-white py-16 px-12 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100 
"
            >
                <h1 className="inline-block text-h2 font-serif font-bold uppercase tracking-widest mb-6 highlighted">
                    Literasi Jamu Digital
                </h1>
                <p className="mb-8">
                    Temukan kekayaan tumbuhan obat dan simplisia dalam monografi
                    multimedia lengkap, jelajahi naskah kuno yang menyimpan
                    rahasia pengobatan tradisional, dan saksikan proses autentik
                    pembuatan jamu melalui koleksi video eksklusif.{" "}
                </p>
                <Button>Telusuri Sekarang</Button>
            </div>
            <Image
                src="/Basil.png"
                width={1800}
                height={1800}
                alt="Picture of artemisia"
                className="absolute -bottom-3/4 left-1/3 select-none pointer-events-none"
            />
        </div>
    );
}
