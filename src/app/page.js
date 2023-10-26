import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="w-11/12 h-screen mx-auto grid place-items-center">
            <Image
                alt=""
                src="/hero-bg.png"
                width={1920}
                height={1080}
                className="pointer-events-none h-screen w-screen absolute z-0 object-cover brightness-[0.8]"
            />

            <div className="relative  text-leaf-100 text-center max-w-4xl font-white py-16 px-12 rounded-3xl">
                <h1 className="inline-block text-[5rem] mb-6 font-jawa">
                    Literasi Jamu Digital
                </h1>
                <p className="mb-8 font-sans text-lg text-leaf-200">
                    Temukan kekayaan tumbuhan obat dan simplisia dalam monografi
                    multimedia lengkap, jelajahi naskah kuno yang menyimpan
                    rahasia pengobatan tradisional, dan saksikan proses autentik
                    pembuatan jamu melalui koleksi video eksklusif.{" "}
                </p>
                <Link href={"/menu"}>
                    <Button>Telusuri Sekarang</Button>
                </Link>
            </div>
        </div>
    );
}
