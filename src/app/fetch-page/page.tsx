"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

interface IData {
    image: any;
    name: string;
    id: string;
}

const FetchPage = () => {

    const [characters, setCharacters] = useState<IData[]>([])

    useEffect(() => {
      const load = async() => {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        setCharacters(data.results)
      }
      load();
    }, [])

    return(
        <>
        <h1>Batata</h1>
        <div>
            {characters.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <Image className="w-auto h-[200px]" src={item.image} alt={item.name} height={300} width={300} priority={true}></Image>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default FetchPage;