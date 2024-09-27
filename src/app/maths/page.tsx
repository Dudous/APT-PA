"use client"

import React, { useState } from "react"

const Maths: React.FC = () => {

    const[numero1, setNumero1] = useState<string>("")
    const[numero2, setNumero2] = useState<string>("")
    const[respSoma, setRespSoma] = useState<number | undefined>(0)
    const[respSub, setRespSub] = useState<number | undefined>(0)
    const[respMult, setRespMult] = useState<number | undefined>(0)
    const[respDiv, setRespDiv] = useState<number | undefined>(0)
    const msgError = "Digite um número válido"

    const handleSoma = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!isNaN(n1) && !isNaN(n2)){
            setRespSoma(n1 + n2);
        }
        else{
            setRespSoma(undefined)
        }
    }
    const handleSub = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!isNaN(n1) && !isNaN(n2)){
            setRespSub(n1 - n2);
        }
        else{
            setRespSub(undefined)
        }
    }
    const handleMult = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!isNaN(n1) && !isNaN(n2)){
            setRespMult(n1 * n2);
        }
        else{
            setRespMult(undefined)
        }
    }
    const handleDiv = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!isNaN(n1) && !isNaN(n2) && n2 !== 0){
            setRespDiv(n1 / n2);
        }
        else{
            setRespDiv(undefined)
        }
    }

    return(
        <>
            <h1>Use client com controle de estado</h1>
            <div>
                <label>Número 01</label>
                <input type="text" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
            </div>
            <div>
                <label>Número 02</label>
                <input type="text" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
            </div>
            <div>
                <h2>Soma</h2>
                {!isNaN(respSoma ?? NaN)? respSoma: msgError}
                <button onClick={handleSoma}>Somar</button>
            </div>
            <div>
                <h2>Subtração</h2>
                {!isNaN(respSub ?? NaN)? respSub: msgError}
                <button onClick={handleSub}>Subtrair</button>
            </div>
            <div>
                <h2>Multiplicação</h2>
                {!isNaN(respMult ?? NaN)? respMult: msgError}
                <button onClick={handleMult}>Multiplicar</button>
            </div>
            <div>
                <h2>Divisão</h2>
                {!isNaN(respDiv ?? NaN)? respDiv: msgError}
                <button onClick={handleDiv}>Dividir</button>
            </div>
        </>
    )
}

export default Maths