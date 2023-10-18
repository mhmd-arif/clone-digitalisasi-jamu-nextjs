import DefaultLayout from "@/components/layout/DefaultLayout";
import React from "react";

export default function MenuLayout({ children }) {
    return <DefaultLayout theme="dark">{children}</DefaultLayout>;
}
