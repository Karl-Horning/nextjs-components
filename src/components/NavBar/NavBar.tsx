"use client";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Poppins500 } from "@/fonts";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavBar() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Add event listener for scroll
        window.addEventListener("scroll", handleScroll);

        // Set initial scroll position
        setScrollY(window.scrollY);

        // Clean up
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            id="navbar"
            className={`fixed left-0 top-0 z-10 flex w-full items-center justify-between border-b border-black px-[10%] py-4 ${Poppins500.className}`}
            style={{ backgroundColor: scrollY > 0 ? "white" : "transparent" }}
        >
            <Image
                src="/example-images/logo.png"
                className="cursor-pointer"
                alt="logo"
                height={100}
                width={220}
            />

            <ul>
                <li className="mx-5 my-3 inline-block cursor-pointer font-medium">
                    Home
                </li>
                <li className="mx-5 my-3 inline-block cursor-pointer font-medium">
                    Services
                </li>
                <li className="mx-5 my-3 inline-block cursor-pointer font-medium">
                    Projects
                </li>
                <li className="mx-5 my-3 inline-block cursor-pointer font-medium">
                    About Us
                </li>
            </ul>

            <button className="inline-flex cursor-pointer items-center rounded-[40px] bg-black px-6 py-4 text-white">
                <span>Get Started</span>
                <FaArrowUpRightFromSquare className="ml-2" />
            </button>
        </nav>
    );
}
