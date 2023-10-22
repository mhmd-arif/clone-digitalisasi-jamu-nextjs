"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

export default function Back() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };
    return (
        <button
            onClick={handleGoBack}
            className="flex group transition-all gap-3 hover:gap-4 items-center text-earth-300"
        >
            <BsArrowLeft />
            <span className="">Kembali</span>
        </button>
    );
}
