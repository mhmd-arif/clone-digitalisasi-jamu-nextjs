import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DefaultLayout({ children, theme = "light" }) {
    return (
        <div className="bg-earth-50 font-sans w-full h-full">
            <Navbar theme={theme} />
            <div className="h-full">{children}</div>
            <Footer theme={theme} />
        </div>
    );
}
