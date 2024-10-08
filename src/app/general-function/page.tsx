"use client"

import { useState } from "react";

interface HandleProps { 
    a: string;
    b: string;
}

const GeneralFunction: React.FC = () => {
    const [numero1, setNumero1] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")

    const [respSoma, setRespSoma] = useState<number, undefined>()
    const [respSub, setRespSub] = useState<number, undefined>()
    const [respMult, setRespMult] = useState<number, undefined>()
    const [respDiv, setRespDiv] = useState<number, undefined>()

    const erro = "Erro!"

    const handleAll = ({a, b} : HandleProps) => {
        const n1 = parseFloat(a)
        const n2 = parseFloat(b)

        if(!isNaN(n1) && !isNaN(n2)){
            setRespDiv(n2 !== 0? n1 / n2 : undefined)
            setRespMult(n1 * n2)
            setRespSoma(n1 + n2)
            setRespSub(n1 - n2)
        }else{
            setRespDiv(undefined)
            setRespMult(undefined)
            setRespSoma(undefined)
            setRespSub(undefined)
        }
    }

    return(
        <>
        <div className="flex justify-center">
            <div className="flex flex-col items-center w-2/4">

                <h1>Função Reaproveitada</h1>
                <div>
                    <input type="text" placeholder="Número 01" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
                </div>
                <div>
                    <input type="text" placeholder="Número 02" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
                </div>
                <div>
                    <button onClick={() => handleAll({a: numero1, b: numero2})}>Calcular</button>
                </div>
                <div>
                    <div>
                        <h2>Soma</h2>
                        <p>{!isNaN(respSoma ?? NaN)? respSoma: erro}</p>
                    </div>

                    <div>
                        <h2>Subtração</h2>
                        <p>{!isNaN(respSub ?? NaN)? respSub: erro}</p>
                    </div>

                    <div>
                        <h2>Multiplicação</h2>
                        <p>{!isNaN(respMult ?? NaN)? respMult: erro}</p>
                    </div>
                    
                    <div>
                        <h2>Divisão</h2>
                        <p>{!isNaN(respDiv ?? NaN)? respDiv?.toFixed(2): erro }</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default GeneralFunction;