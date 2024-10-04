"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

import { api } from "@/constants/api"

interface IData {
    name: string;
    gender: string;
    status: string;
    species: string;
    image: string;
}

const AxiosPage = () => {

    const [data, setData] = useState<IData[]>([])
    const [erro, setErro] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>("Não foi possível buscar os dados!!")
    const [page, setPage] = useState<string>("")

    useEffect(() => {
      api.get(`/character/?page=${page}`).then((res) =>{
        setData(res.data.results)
        setErro(false)
      }).catch((err) => {
        if(err.response.status == 404){
            setErrorMessage("Página não encontrada!")
        }
        setErro(true)
        })
    }, [page])
    

    return(
        <>
            <h1>Página com use Effect Axios</h1>
            <input type="text" value={page} onChange={(e) => setPage(e.target.value)} />
            {erro && <h5>{errorMessage}</h5>}
            {data.map((item, index) =>{
                return(
                    <div key={index}>
                        <h2>
                            <Image className="h-auto w-[200px]" src={item.image} alt={""} width={300} height={300} priority={true}></Image>
                            <p>{item.name}</p>
                            <p>{item.species}</p>
                            <p>{item.gender}</p>
                            <br />
                        </h2>
                    </div>
                )
            })}
        </>
    )
}

export default AxiosPage;