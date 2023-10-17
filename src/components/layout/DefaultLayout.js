import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DefaultLayout({ children }) {
    return (
        <div className="bg-earth-50 font-sans w-full h-full overflow-auto">
            <Navbar />
            <div className="h-full">{children}</div>
            <Footer />
        </div>
    );
}