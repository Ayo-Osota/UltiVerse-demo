import Image from "next/image";
import refine from "../../public/images/refine.svg"
import arrow from "../../public/images/arrow-up-right.svg"
import Link from "next/link";
import { navLinks } from "@/data";

const Nav = () => {
    return (
        <div className="border-2 relative container">
            <div className="flex h-full items-center overflow-hidden gap-10 absolute left-0">
                <Image src="/images/logo.svg" alt="multiverse" width={30} height={35}/>
            </div>

            <div className="progress-bar">
                <div className="w-full h-full bg-gray-200 rounded-md z-10"></div>
            </div>

            <div className="grid grid-flow-col items-center px-12">
                <nav>
                    <ul className="flex justify-between">
                        {navLinks.map((link) => {
                            const { id, content, path } = link;
                            return (
                                <li key={id}>
                                    <Link href={path}>
                                        <div className="flex flex-col justify-center">
                                            <p>{id}</p>
                                            <h4>{content}</h4>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                        <li>
                            <Image src="/images/hamburger.svg" alt="menu" width={36} height={8}/>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav;