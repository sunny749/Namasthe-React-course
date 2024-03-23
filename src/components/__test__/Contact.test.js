import Contact from "../Contact";
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'

test('testing contact us page',()=>{
    render(<Contact/>)
    const heading=screen.getByRole('heading')

    // assertion
    expect(heading).toBeInTheDocument()
})

test('testing contact us page',()=>{
    render(<Contact/>)
    const button=screen.getByRole('button')

    // assertion
    expect(button).toBeInTheDocument()
})

test('testing contact us page',()=>{
    render(<Contact/>)
    const placeholder=screen.getByPlaceholderText('name')

    // assertion
    expect(placeholder).toBeInTheDocument()
})

test('should we have 2 inputs in our component',()=>{
    render(<Contact></Contact>)
    let inputs=screen.getAllByRole('textbox')
    expect(inputs.length).toBe(2)
})