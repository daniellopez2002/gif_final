import { useState } from 'react'

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setinputValue] = useState('');
    const onInputChange = (event) => {
        setinputValue(event.target.value)
      }
    const onSubmit = (event) => {
        event.preventDefault();
        onAddCategory(inputValue);
        setinputValue('')
    }

    return(
        <>
        <input 
        type="text"
        placeholder="Buscar"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
        />  
    
        <button onClick={(event) => onSubmit(event)}>Agregar</button>
    </>
             

      )
  }