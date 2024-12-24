import { useState , useEffect} from "react"
import {getGifs} from "../helpers/getGifs"
//! Un hook es solo una funcion que regresa algo
//! en un custom hook no se recibe un props, eso es nativo de los hooks de react

//! Esto es un customHook, puede servir para separar la logica del archivo de renderizado jsx
export const useFetchGifs = (category, setCategories) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }
    //! el UseEffect recive una funcion y arreglo de dependencias
    //! Si las dependencias estan vacias, significa que el useEffect se disparara la primera vez que se ejecute mi compenente
    useEffect(() => {
        //! Solo necesito llamar a getImages una sola vez, por eso esta en el useEffect
        getImages()
    }, [])

    const eliminarCategoria = () => {
        setCategories(catArr => catArr.filter(cat => cat !== category) )
    }

    return {
        images: images,
        isLoading: isLoading,
        eliminarCategoria
    }
}


