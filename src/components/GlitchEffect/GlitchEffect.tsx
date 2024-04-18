import { Poppins700 } from "@/fonts";
import style from "./GlitchEffect.module.css";

export default function GlitchEffect() {
    return (
        <div
            className={`${Poppins700.className} box-border min-h-screen bg-[#222] text-white`}
        >
            <h1 className={`${style.glitch}`}>Glitch</h1>
        </div>
    );
}
