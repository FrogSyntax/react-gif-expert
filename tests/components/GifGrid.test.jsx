import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock("../../src/hooks/useFetchGifs")


describe('Pruebas en <GifGrid>', () => {
    const category = 'One Punch'
    const func = jest.fn()
    test('debe de mostrar el loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
            eliminarCategoria: Function,
        })
        render(<GifGrid category={category} setCategories={func}/>)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
        // screen.debug()
    })
    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [
            {
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
            },
            {
            id: '123',
            title: 'Goku',
            url: 'https://localhost/goku.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true,
            eliminarCategoria: Function,
        })
        render(<GifGrid category={category} setCategories={func}/>)
        expect(screen.getAllByRole('img').length).toBe(2)
    })
})