import React from 'react'

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        // lets see how we use state in class component 
        // if we want another state in fc we use another useState for that
        // but in class component we use these state object and add new 
        // proparty to the obj and in fc also use these type of big object 
        // to manage the states under the hood fc component will do that thing
        // for us
        this.state={
            count:1,
            count2:2
        }
        // when a class componet is rendered in the browser then the constructor
        // is called first and then followed by render and then component did mount
        // in fc we use useEffect hook to do this.and this method only called in 
        // initial render only thats way we use these method to fetch data
        console.log('constructor method')
        // when we have two class components and one is parent and one is chaild
        // then the parent constructor and parent render is called and inside the 
        // render we encounter child component then that chaild componet constructor 
        // and chaild render and chaild componentdid mount and then parent 
        // component did mount is called
    }
    componentDidMount( ){
        console.log('component did mount')
    }
    componentDidUpdate(){
        // this method is called when the component is updated 
        // this method is having access to the prevProps and prevState
        // and this method is used when we do some task when some props and state is changed
        console.log('component did update')
    }
    componentWillUnmount(){
        // this method is called when the component is unmounted 
        // this method is used to remove timer and cleanup.
        // if we not removed the timers the time continues even after 
        // the component is unmounted and when we mount the component 
        // again then the component set second timer too this effects the
        // functionality and the performance
        console.log('component id unmounted')
    }
    render(){
        console.log('render Method')
        const {name,location}=this.props
        const {count,count2}=this.state 
        return(
            <div className="user-card">
                <h2>Count:{count}</h2>
                {/* if we are having 10 or more values in a state 
                but we want to update one value then the one value
                only pass to setState inside obj then the setState
                dont touch the other values only update the passed value
                */}
                <button onClick={()=>
                 this.setState({count:count+1})
                }>Increase</button>
                <h2>Count2:{count2}</h2>
                <h2>Name:{name}</h2>
                <h2>Location:{location}</h2>
                <h3>Contact:Sunny@749</h3>
            </div>
        )
    }
}
export default UserClass