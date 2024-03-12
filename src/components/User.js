const User=({name,location})=>{
    return (
        <div className="user-card">
            <h2>Name:{name}</h2>
            <h2>Location:{location}</h2>
            <h3>Contact:Sunny@749</h3>
        </div>
    )
}

export default User