import {useEffect,useState} from 'react'
const useFetch=(url,resId='')=>{
    const [data,setData]=useState(null)
    useEffect(()=>{
        fetchData(url,resId)
    },[])
    const fetchData=async (url,resId)=>{
        const res=await fetch(url+resId)
        const json=await res.json()
        setData(json)
    }
    return data
}
export default useFetch