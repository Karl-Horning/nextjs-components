import style from "./ProgressBarLines.module.css";

export default function ProgressBarLines() {
    return (
        <div className={`${style.skills}`}>
            <h2 className="mb-1 mt-10 text-lg font-normal tracking-wide text-white">
                HTML
            </h2>
            <div
                className={`${style["progress-bar"]} h-[10px] w-[600px] rounded-md bg-[#959595]`}
            >
                <div
                    className={`${style.percentage} h-[10px] rounded-md bg-[#e91e63]`}
                >
                    <span className="float-right flex items-center justify-center border border-[#e91e63] bg-[#222] text-white">
                        86%
                    </span>
                </div>
            </div>
        </div>
    );
}
