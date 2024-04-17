import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import Image from "next/image";
import style from "./Header.module.css";

export default function Header() {
    return (
        <header
            className={`${style.header} flex min-h-screen w-full flex-col justify-center bg-gradient-to-b from-[#eefff9] via-[#ffccc1] to-[#dcdbff] p-[10%]`}
        >
            <h1 className="mt-[100px] text-[13vw] font-bold uppercase leading-[11vw]">
                <span>Free</span>
                <br />
                <span>lancer</span>
            </h1>

            <div className="mx-0 my-5">
                <button className="mr-5 inline-flex cursor-pointer items-center rounded-[40px] bg-black p-3 pl-8 text-lg text-white">
                    Request call back{" "}
                    <LiaPhoneVolumeSolid className="ml-8 h-10 w-10 rounded-[50%] bg-white p-3 text-black" />
                </button>
                <button className="mr-5 inline-flex cursor-pointer items-center bg-transparent text-lg font-semibold underline">
                    Know more <FaArrowUpRightFromSquare className="ml-3 w-5" />
                </button>
            </div>

            <p className="max-w-[360px] font-medium">
                Passionate UI/UX designers with 10+ years of experience.
            </p>

            <Image
                src="/example-images/user.png"
                alt="User"
                height={1000}
                width={700}
                className="absolute bottom-[-8.9%] right-[13%] w-4/5 max-w-[500px]"
            />
        </header>
    );
}
