import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { FaNodeJs } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { SiRstudioide } from "react-icons/si";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-6xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-6xl" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-6xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className="text-6xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className="text-6xl text-purple-700"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-6xl text-blue-900"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiRstudioide className="text-6xl text-blue-400"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies