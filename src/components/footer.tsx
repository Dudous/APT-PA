import Link from "next/link"

interface IFooter {
    roda: string;
    pe: number;
}

export const Footer: React.FC<IFooter> = ({roda, pe}) => {
    return (
        <footer className="font-robFont">
            <h2>{roda}</h2>
            <p>{pe}</p>
        </footer>
    )
}