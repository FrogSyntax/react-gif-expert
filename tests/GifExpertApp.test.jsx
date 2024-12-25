import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('pruebas de gifExpertApp', () => {
    test('deberia eliminar las categorias', () => {
        render(<GifExpertApp/>);
        const [ButtonEliminarTodo, ] = screen.getAllByRole('button')
        fireEvent.click(ButtonEliminarTodo)
        expect(() => {screen.getAllByRole('heading', {level: 3})}).toThrow()
    })
    test('deberia eliminar la acategoria OnePunch', () => {
        render(<GifExpertApp/>);
        const [, ...ButtonEliminar] = screen.getAllByRole('button')
        // console.log(ButtonEliminar)
        fireEvent.click(ButtonEliminar[1])
        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(1)
    })
    test('Deberia mostrar las Categorias iniciales', () => {
        render(<GifExpertApp/>);
        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(2)
    })
    test('OnAdd category agrega una categoria al principio de la pagina', () => {
        const inputValue = 'Dragon Ball'
        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input,{target: {value: inputValue}})
        // screen.debug()
        fireEvent.submit(form)
        expect(screen.getByText(inputValue))
    })
    test('OnAdd category no agrega nada si le envian el mismo nombre', () => {
        const inputValue = 'KIMETSU'
        const {container} = render(<GifExpertApp/>);
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input,{target: {value: inputValue}})
        fireEvent.submit(form)
        screen.debug()
        
        expect(container).toMatchSnapshot()
    })
})