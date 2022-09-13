import { useCallback, useState, useMemo } from "react"
import { AddCategory, GifGrid, useCounter} from "./components"
import { Small } from "./small";

export const GifExpertApp = () => {

  const {counter,incrementar, reset, disminuir} = useCounter(6);
  const [mensaje, setMensaje] = useState("hola")
  const [categories, setCategories] = useState(['Batman']);
  const [count, setCount] = useState(0);

  const onAddCategory = (category) => {
    // setCategories([...categories, 'hola'])
    setCategories(list => [...list, category])
    console.log("Lista de categorías: ", categories)

  }

  const console_print = () =>{
    console.log(counter)
    
    
  }

  const changeMessage = useCallback(()=>{
    setMensaje("pollo")
  })

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  

  return (
    <>
      <h1>GifExpert</h1>

      <AddCategory onAddCategory={onAddCategory} />
      <ol>
        {
          categories.map(
            (category, key) => {
              return <GifGrid category={category} key={key} />
            }
          )
        }
      </ol>
      <div>
        <div>Contador hook: {counter}</div>
        <button onClick={()=>incrementar()}>+1</button>
        <button onClick={()=>disminuir()}>-1</button>
        <button onClick={()=>reset()}>reset</button>
        <button onClick={()=>console_print()}>console</button>
      </div>
      <div>
        <h1>counter con memo: <Small value={counter}></Small></h1> 
      </div>
      <h1>{mensaje}<button onClick={changeMessage}>change</button></h1>
      <div>
        <h1>calculation:{calculation}</h1>
      </div>
    </>
  )

}

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};