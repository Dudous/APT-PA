"use client"

import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IMenu {
    op1: string;
    op2: string;
    op3?: string;
    op4: string;
    op5: string;
    op6: string;
    op7: string;
}

export const Menu: React.FC<IMenu> = ({op1, op2, op3, op4, op5, op6, op7}) => {

    const [navBar, setNavBar] = useState<boolean>(false)
    const navHandler = () => {
        setNavBar(current => !current)
    }

    useEffect( () =>{
        console.log(navBar)
    }, [navBar])

    return (
        <nav className="text-roboto bg-blue-400 text-white flex flex-wrap w-screen items-center justify-between py-4 md:py-0 px-5">
            <div>
                <button>É os guri</button>
            </div>
            <svg onClick={navHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 md:hidden ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <div className={"w-full md:flex items-center md:w-auto" + (navBar? " hidden": "")}>
                <div className="md:flex md:justify-between gap-2 pt-4 md:pt-0">
                    <Link href={ROUTES.home}><p className="bg-blue-500 w-48 px-2 py-1 text-branco my-2 rounded cursor-pointer flex justify-center">{op1}</p></Link>
                    <Link href={ROUTES.maths}><p className="bg-blue-500 w-48 px-2 py-1 text-branco my-2 rounded cursor-pointer flex justify-center">{op2}</p></Link>
                    <Link href={ROUTES.generalFunction}><p className="bg-blue-500 w-48 px-2 py-1 text-branco my-2 rounded cursor-pointer flex justify-center">{op3}</p></Link>
                    <Link href={ROUTES.cards}><p className="bg-blue-500 w-48 px-2 py-1 text-branco my-2 rounded cursor-pointer flex justify-center">{op4}</p></Link>
                    <Link href={ROUTES.fetchNativo}><p className="bg-blue-500 w-48 px-2 py-1 text-branco my-2 rounded cursor-pointer flex justify-center">{op5}</p></Link>
                    <Link href={ROUTES.fetchAxios}><p className="bg-blue-500 w-48 px-2 py-1 text-branco my-2 rounded cursor-pointer flex justify-center">{op6}</p></Link>
                    <Link href={ROUTES.serverPage}><p className="bg-blue-500 w-48 px-2 py-1 text-branco my-2 rounded cursor-pointer flex justify-center">{op7}</p></Link>
                </div>
            </div>
        </nav>
    )
}