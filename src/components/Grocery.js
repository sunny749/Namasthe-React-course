import {useContext} from 'react'
import UserContext from '../utils/UserContext'
const Grocery=()=>{
    const {loggedInUser}=useContext(UserContext)
    return (
    <div>
        <h1>This is the big components with lots of child components and data</h1>
        <p className='font-bold text-xl'>{loggedInUser}</p>
    </div>
    )
}
export default Grocery