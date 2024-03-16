import useFetch from '../Hooks/useFetch'

const About=()=>{
    const data=useFetch('https://api.github.com/users/sunny749')
    if(data===null)return <h1>Loading...</h1>
    return (
        <>
        <img style={{width:'200px'}}src={data.avatar_url} alt="" />
        <h2>{data.name}</h2>
        <h3>{data.location}</h3>
        </>
    )   
}
export default About