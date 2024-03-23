import Header from '../Header';
import {fireEvent,screen,render}from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import appStore from '../../utils/appStore'
import {Provider} from 'react-redux'
import '@testing-library/jest-dom'
import useOnlineStatus from '../../Hooks/useOnlineStatus'

it('should load header component with login button',()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );
    let logout=screen.getByText('Logout')
    expect(logout).toBeInTheDocument()

    fireEvent.click(logout)
    
    let login=screen.getByRole('button',{name:'Login'})
    expect(login).toBeInTheDocument()
})

it('should render the cart inside the header component',()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

    let cart=screen.getByText(/Cart/)
    expect(cart).toBeInTheDocument()
})

// Mock the hook directly without using jest.mock()
jest.mock('../../Hooks/useOnlineStatus');

it('should render the offline status',()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    );
    useOnlineStatus.mockImplementation(() => false)
    let offline=screen.getByText('Online Status:❌')
    expect(offline).toBeInTheDocument()
})

it('should render the online status',()=>{
    useOnlineStatus.mockImplementation(() => true)
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    );
    
    let online=screen.getByText('Online Status:✅')
    expect(online).toBeInTheDocument()
})