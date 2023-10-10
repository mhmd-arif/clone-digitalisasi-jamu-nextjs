import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DefaultLayout({ children }) {
    return (
        <div className="font-sans">
            <Navbar />
            <div className="">{children}</div>
            <Footer />
        </div>
    );
}
