import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

//! UseEffect es un hook que sirve para disparar efectos secundarios

export const GifGrid = ({ category, setCategories }) => {

    const {images, isLoading, eliminarCategoria} = useFetchGifs(category, setCategories)

    return (
        <>
            <h3>{category}</h3>
            <button onClick={eliminarCategoria}>Elminar Categoria</button>
            {isLoading && (<h2>Cargando...</h2>)}
            <div className="card-grid">
                {images.map( (image) => 
                    <GifItem 
                        key={image.id}
                        //! lleva todos los indices del objeto como el prop del componenete
                        {...image}
                    />
                )}
            </div>  
        </>
    );
};
