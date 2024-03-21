import useFetch from '../Hooks/useFetch'
import UserContext from '../utils/UserContext'
import React from 'react'

// const About=()=>{
//     const data=useFetch('https://api.github.com/users/sunny749')
//     if(data===null)return <h1>Loading...</h1>
//     return (
//         <>
//         <img style={{width:'200px'}}src={data.avatar_url} alt="" />
//         <h2>{data.name}</h2>
//         <h3>{data.location}</h3>
//         </>
//     )   
// }
class About extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    async componentDidMount(){
        const data=await fetch('https://api.github.com/users/sunny749')
        const json=await data.json()
        this.setState(json)
    }
    render(){
        if(this.state=={})return <>loading...</>
        return (
                    
                        <div>
                            <img style={{width:'200px'}}src={this.state.avatar_url} alt="" />
                            <h2>{this.state.name}</h2>
                            <h3>{this.state.location}</h3>
                            <UserContext.Consumer>
                                {({loggedInUser})=><h3>{loggedInUser}</h3>}
                            </UserContext.Consumer>
                        </div>
                    
                )  
    }
}
export default About