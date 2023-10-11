import React from "react";

export default function Button({ children }) {
    return (
        <button className="py-3 px-6 text-earth-100 bg-leaf-800 hover:bg-leaf-700 active:bg-leaf-900 transition rounded-3xl">
            {children}
        </button>
    );
}
