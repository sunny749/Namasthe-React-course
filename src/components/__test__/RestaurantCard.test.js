import RestaurantCard from "../RestaurantCard";
import {screen,render} from '@testing-library/react'
import '@testing-library/jest-dom'
import resData from '../mocks/resCardMockData.json'
import {pramotedResCard} from '../RestaurantCard'
import pramotedData from '../mocks/pramotedResCardData.json'

let PramotedResCard=pramotedResCard(RestaurantCard) 

test('should Restaurant card is renderd with name', () => { 
    render(<RestaurantCard resData={resData}/>)

    let name=screen.getByText('Chinese Wok')
    expect(name).toBeInTheDocument()
 })

 test('Should renderd with pramoted tag',()=>{
    render(<PramotedResCard resData={pramotedData} />)

    let pramoted=screen.getByText('Pramoted')
    expect(pramoted).toBeInTheDocument()
 })