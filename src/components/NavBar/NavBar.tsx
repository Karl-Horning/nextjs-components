"use client";

import { FaArrowUpRightFromSquare, FaBars } from "react-icons/fa6";
import { Poppins500 } from "@/fonts";
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./NavBar.module.css";

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

    const toggleMenu = () => {
        const menuLinks = document.getElementById("menu-links");
        menuLinks?.classList.toggle("max-h-full");
        menuLinks?.classList.toggle("max-h-0");
    };

    return (
        <nav
            id="navbar"
            className={`fixed left-0 top-0 z-10 flex w-full items-center justify-between border-b border-black px-[10%] py-4 ${Poppins500.className}`}
            style={{ backgroundColor: scrollY > 0 ? "white" : "transparent" }}
        >
            <Image
                src="/example-images/logo.png"
                className="w-[150px] cursor-pointer md:w-[220px]"
                alt="logo"
                height={100}
                width={220}
            />

            <ul
                id="menu-links"
                className={`${style["menu-links"]} absolute left-0 top-full max-h-0 w-full overflow-hidden bg-black text-center text-white md:static md:top-auto md:max-h-full md:w-auto md:bg-transparent md:text-left md:text-black md:text-opacity-100`}
            >
                <li className="mx-5 my-3 inline-block cursor-pointer font-medium">
                    Home
                </li>
                <li className="m-[10px] inline-block cursor-pointer font-medium md:mx-5 md:my-3">
                    Services
                </li>
                <li className="m-[10px] inline-block cursor-pointer font-medium md:mx-5 md:my-3">
                    Projects
                </li>
                <li className="m-[10px] inline-block cursor-pointer font-medium md:mx-5 md:my-3">
                    About Us
                </li>
            </ul>

            <button className="hidden cursor-pointer items-center rounded-[40px] bg-black px-6 py-4 text-white md:inline-flex">
                <span>Get Started</span>
                <FaArrowUpRightFromSquare className="ml-2" />
            </button>

            <FaBars
                className="block h-8 w-8 cursor-pointer md:hidden"
                onClick={toggleMenu}
            />
        </nav>
    );
}
