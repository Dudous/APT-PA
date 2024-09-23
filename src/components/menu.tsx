import Link from "next/link";

interface IMenu {
    op1: string;
    op2: string;
    op3?: boolean;
    op4: number;
}

export const Menu: React.FC<IMenu> = ({op1, op2, op3, op4}) => {
    return (
        <nav className="text-roboto flex flex-row justify-center align-center gap-3 bg-blue-700">
            <p className="bg-blue-500 w-48 px-2 py-1 text-branco my-2 rounded cursor-pointer flex justify-center">{op1}</p>
            <p className="bg-blue-500 w-48 px-2 py-1 text-branco my-2 rounded cursor-pointer flex justify-center">{op2}</p>
            <p className="bg-blue-500 w-48 px-2 py-1 text-branco my-2 rounded cursor-pointer flex justify-center">{op3}</p>
            <p className="bg-blue-500 w-48 px-2 py-1 text-branco my-2 rounded cursor-pointer flex justify-center">{op4}</p>
        </nav>
    )
}