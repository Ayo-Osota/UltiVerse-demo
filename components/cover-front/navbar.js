import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data";

const Nav = () => {
    return (
        <div className="border border-gray-700 flex relative container mt-8 mb-16">
            <div className="flex h-full items-center py-4 px-5">
                <Image src="/images/logo.svg" alt="multiverse" width={30} height={35}/>
            </div>

            <div className="w-2/5 h-full bg-gray-900">
                <div className="w-0 h-full bg-[#00FFE6] z-10 nav-loader"></div>
            </div>

            <div className="h-full w-full">
                <nav className="h-full">
                    <ul className="grid grid-flow-col items-center h-full nav-grid">
                        {navLinks.map((link) => {
                            const { id, content, path } = link;
                            return (
                                <li key={id} className="h-full border-r border-gray-700 ">
                                    <Link href={path}>
                                        <div className="relative flex h-full flex-row items-center justify-center py-2 px-4">
                                            <p className="absolute left-4 self-end">{id}</p>
                                            <h4>{content}</h4>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                        <li className="flex items-center justify-center">
                            <Image src="/images/hamburger.svg" alt="menu" width={36} height={8}/>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav;