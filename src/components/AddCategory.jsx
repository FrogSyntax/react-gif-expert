import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')
  const onInputChange = ({target}) => {
    //! target.value para atrapar los valores del teclado
    setInputValue(target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;
    
    //! el set pudede recibir un "valor determinado" 
    //! o una funcion actualizadora, que tiene como argumento el estado previo
    // setCategories(categories => [inputValue, ...categories]);
    onNewCategory(inputValue.trim())
    //! Hace que los valores no permanezcan en el input
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
