import Image from "next/image";
import refine from "../../public/images/refine.svg"
import arrow from "../../public/images/arrow-up-right.svg"
import Link from "next/link";
import { navLinks } from "@/data";

const Nav = () => {
    return (
        <div className="border-2 relative">
            <div className="flex h-full items-center overflow-hidden gap-10 absolute left-0">
                {[1, 2, 3].map((refineImages, i) => {
                    return <Image key={i} src={refine} alt="refine" />
                })}
            </div>

            <div className="grid grid-flow-col items-center px-12">
                <div className="py-15">
                    <h4>UI/UX DEMO</h4>
                </div>
                <h4>OUR EXPERTISE</h4>
                <nav>
                    <ul className="flex justify-between">
                        {navLinks.map((link) => {
                            const { id, text, subText, path } = link;
                            return (
                                <li key={id}>
                                    <Link href={path}>
                                        <div className="flex flex-col justify-center">
                                            <h4>{text}</h4>
                                            <div className="flex items-center">
                                                <p>{subText}</p>
                                                <Image src={arrow} alt="arrow" />
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav;