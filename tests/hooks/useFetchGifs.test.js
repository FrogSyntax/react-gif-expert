//! En los custom hooks se evalua lo que entra en el hook y el retorno

import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


describe('Pruebas en el hook useFetchGifs', () => {
    test('debe de regresar el estado inicial', () => {
        const {result} = renderHook(() => useFetchGifs('One Punch'))

        const {images, isLoading, eliminarCategoria} = result.current
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
        expect(eliminarCategoria).toBeTruthy()
        
    })
    test('debe de retornar un arreglo de imagenes y el isLoading en false', async () => {
        const {result} = renderHook(() => useFetchGifs('One Punch', () => {}))
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )
        const {images, isLoading, eliminarCategoria} = result.current
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
        expect(eliminarCategoria).toBeTruthy()
    })
})