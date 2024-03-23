import {fireEvent,screen,render, getAllByTestId} from '@testing-library/react'
import Header from '../Header'
import Cart from '../Cart'
import RestaurentMenu from '../RestaurentMenu'
import '@testing-library/jest-dom'
import MockData from '../mocks/restaurantMenuData.json'
import { act } from 'react-dom/test-utils'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import appStore from '../../utils/appStore'

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MockData)
        }
    })
})

it('should render and working of cart and clear cart',async()=>{
    await act(async()=>{
        return (
            render(<Provider store={appStore}>
                <BrowserRouter>
                <Header/>
                 <RestaurentMenu />
                 <Cart/>
                 </BrowserRouter>
            </Provider>)
        )
    })
    let recommended=screen.getByText('Recommended(15)')
    expect(recommended).toBeInTheDocument()
    fireEvent.click(recommended)
    let items=screen.getAllByTestId('items')
    expect(items.length).toBe(15)
    let addBtns=screen.getAllByText('Add +')
    fireEvent.click(addBtns[0])
    let cart=screen.getByText('Cart - (1)')
    expect(cart).toBeInTheDocument()
    fireEvent.click(addBtns[1])
    cart=screen.getByText('Cart - (2)')
    expect(cart).toBeInTheDocument()
    fireEvent.click(cart)
    items=screen.getAllByTestId('items')
    expect(items.length).toBe(17)
    let clearCartBtn=screen.getByText('Clear Cart')
    fireEvent.click(clearCartBtn)
    items=screen.getAllByTestId('items')
    expect(items.length).toBe(15)
})

it('should collaplse the accordian on double click',async()=>{
    await act(async()=>{
        return (
            render(<Provider store={appStore}>
                <BrowserRouter>
                <Header/>
                 <RestaurentMenu />
                 <Cart/>
                 </BrowserRouter>
            </Provider>)
        )
    })
    let recommended=screen.getByText('Recommended(15)')
    expect(recommended).toBeInTheDocument()
    fireEvent.click(recommended)
    let items=screen.getAllByTestId('items')
    expect(items.length).toBe(15)
    fireEvent.click(recommended)
    expect(screen.queryAllByAltText('items').length).toBe(0)
})