import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Batman'])

  const onAddCategory = (category) => {
    // setCategories([...categories, 'hola'])
    setCategories(list => [...list, category])
    console.log("Lista de categorías: ", categories)

  }

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
    </>
  )

}