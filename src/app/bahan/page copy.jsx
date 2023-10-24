// import React from "react";
// import Link from "next/link";
// import Back from "@/components/Back";
// import Image from "next/image";

// export default function Bahan() {
//   return (
//     <div className="max-w-7xl text-white mx-auto pt-24 h-screen ">
//       <Back />
//       <h1 className="mb-8 font-serif text-earth-200 text-center text-h2 tracking-widest uppercase">
//         Tumbuhan Obat & Simplisia
//       </h1>

//       <div className="flex items-center font-serif ">
//         <div className="flex flex-row justify-center gap-16 py-4 px-32 w-screen text-h2 gap- overflow-hidden text-earth-50  ">
//           <LinkCard
//             href={"/bahan/tumbuhan-obat"}
//             src={"/menu/simplisia.png"}
//             title={"Tumbuhan Obat"}
//             desc={
//               "Tumbuhan obat adalah tanaman yang digunakan secara tradisional atau medis untuk tujuan pengobatan."
//             }
//           >
//             {/* <span className="tracking-widest uppercase">Tumbuhan Obat</span> */}
//           </LinkCard>
//           <LinkCard
//             href={"/bahan/simplisia"}
//             src={"/menu/jamu.png"}
//             title={"Simplisia"}
//             desc={
//               "Simplisia adalah istilah dalam farmasi yang merujuk pada bahan baku tumbuhan atau hewan yang digunakan dalam pembuatan obat."
//             }
//           >
//             {/* <span className="tracking-widest uppercase">Simplisia</span> */}
//           </LinkCard>
//         </div>
//       </div>
//     </div>
//   );
// }

// const LinkCard = ({ href, src, title, desc, children }) => {
//   return (
//     <Link
//       href={href}
//       className="group hover:-translate-y-5 transform duration-300 ease-out transition-all relative px-12  w-[400px] h-[500px] rounded-2xl overflow-hidden text-stone-100 grid place-items-cente "
//     >
//       <Image
//         src={src}
//         fill
//         objectFit="cover"
//         className="brightness-[0.9]"
//         alt="cover category"
//       />
//       <div className="group-hover:-translate-y-3 transition-all relative text-h2 text-center text-leaf-100 font-serif">
//         <div className="grid grid-rows-2 h-96 gap-8 justify-center item-center">
//           <h2 className="text-h2 self-end"> {title} </h2>
//           <p className="text-lg">{desc}</p>
//         </div>
//       </div>
//     </Link>
//   );
// };
