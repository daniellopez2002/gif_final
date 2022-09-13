import { useState, useEffect } from "react"

export const useCounter = (num) =>{

    const [counter, setCounter] = useState(num)

     const incrementar = (num = 1) =>{
        setCounter(counter + num)
     }
     const reset = () =>{
        setCounter(num)

     }
     const disminuir = (num = 1)=>{
        if(counter === 0) return
        setCounter(counter - num)

     }

     return{
        counter,
        incrementar,
        reset,
        disminuir
     }

}