import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DefaultLayout({ children, theme = "light" }) {
    return (
        <div className="bg-leaf-950 font-sans w-full min-h-screen">
            <Navbar theme={theme} />
            <div className="text-white">{children}</div>
            {/* <Footer theme={theme} /> */}
        </div>
    );
}
