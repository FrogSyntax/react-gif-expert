import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    //! Es recomendable tener x cantidad de useState por cantidad de variables que necesitamos
    const [categories, setCategories] = useState(["One Punch", "Kimetsu"]);

    const deleteAllCategories = () => {
        setCategories([])
    }


    const onAddCategory = (newCategory) => {
        if (categories.map(x => x.toLowerCase()).includes(newCategory.toLowerCase())) return;
        // setCategories(categories.concat(valor));
        // setCategories([...categories, valor]);
        setCategories([ newCategory, ...categories]);
    };

    return (
        <>
            <h1>Gif Expert App</h1>
            <button onClick={deleteAllCategories}>Eliminar Categorias</button>
            <AddCategory 
                // setCategories={setCategories} 
                onNewCategory = {value => onAddCategory(value)}
            />
            {
                categories.map((category) => 
                    (
                        <GifGrid 
                            key={category} 
                            category={category}
                            setCategories={setCategories}
                        />
                        
                    )
                )
            }
        </>
    );
};
