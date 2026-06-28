"use client";

import "./dark.scss";
import { useEffect } from "react";

export default function DarkLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        // add class to html when entering dark page
        document.documentElement.classList.add("170web-dark");

        // class remove when exiting dark page
        return () => {
            document.documentElement.classList.remove("170web-dark");
        };
    }, []);

    return <>{children}</>;
}
