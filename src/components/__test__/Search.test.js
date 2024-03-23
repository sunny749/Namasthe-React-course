import {fireEvent,screen,render} from '@testing-library/react'
import Body from '../Body'
import '@testing-library/jest-dom'
import MockData from '../mocks/restaurentsMockData.json'
import { BrowserRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import useOnlineStatus from '../../Hooks/useOnlineStatus'
import UserContext from '../../utils/UserContext'

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MockData)
        }
    })
})

it('should render one card on search of pizza',async()=>{
    await act(async ()=>render( <BrowserRouter>
        <Body/>
    </BrowserRouter>))

    let search=screen.getByRole('button',{name:'Search'})

    let input=screen.getByTestId('searchInput')
    fireEvent.change(input,{target:{value:'pizza'}})
    fireEvent.click(search)

    let cards=screen.getAllByTestId('card')
    expect(cards.length).toBe(2)
})

it('should return 5 cards when we click the toprestaurents button',async()=>{
    await act(async()=>{
        return render(
            <BrowserRouter><Body/></BrowserRouter>
        )
    })

    let topRestaurantsBtn=screen.getByRole('button',{name:'Top Rated Restaurants'})

    fireEvent.click(topRestaurantsBtn)
    let cards=screen.getAllByTestId('card')
    expect(cards.length).toBe(6)
})

jest.mock('../../Hooks/useOnlineStatus')

it('should render the ofline text',async()=>{
    useOnlineStatus.mockReturnValue(false)
    await act(async()=>{
        return render(
            <BrowserRouter><Body/></BrowserRouter>
        )
    })
    let text=screen.getByText('please check the connection')
    expect(text).toBeInTheDocument()
})

it('should render the logged-in username', async () => {
    useOnlineStatus.mockReturnValue(true)
    // Mock context values
    let loggedInUser = {loggedInUser:'Sunny Gante'};
    let setLoggedIn = jest.fn((newUsername) => {
      loggedInUser = newUsername;
    });
  
    // Render the component inside act
    await act(async () => {
      render(
        <BrowserRouter>
          <UserContext.Provider value={{ ...loggedInUser, setLoggedIn }}>
            <Body />
          </UserContext.Provider>
        </BrowserRouter>
      );
    });
  
    // Verify initial state
    let user = screen.getByTestId('user');
    expect(user).toBeInTheDocument();
    expect(user.value).toBe('Sunny Gante');
  
    // Simulate change event
    fireEvent.change(user, { target: { value: 'Sunny' } });
    expect(loggedInUser.loggedInUser).toBe('Sunny') 
  });