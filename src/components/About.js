import User from "./User"
import UserClass from "./UserClass"

const About=()=>{
    return (
        <>
        <h1>This is Aboutus Page</h1>
        <User name={'sunny functional component'} location={'chintalaplalli'}/>
        <UserClass name={'sunny class component'} location={'chintalaplalli'}/>
        </>
    )   
}
export default About