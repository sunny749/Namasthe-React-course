const Contact=()=>{
    return (
        <div>
        <h1 className="p-4 m-4 text-3xl font-bold">Contact Us</h1>
        <form action="">
            <input type="text" placeholder="name" className="p-2 m-2 border border-gray-200"/>
            <input type='text' placeholder="message" className="p-2 m-2 border border-gray-200"/>
            <button className="p-2 bg-black text-white rounded-lg">submit</button>
        </form>
        </div>
    )
}
export default Contact