import {useEffect,useState} from 'react'
const useOnlineStatus =()=>{
    const [onlineStatus,setStatus]=useState(window.navigator.onLine)
    handleOnline=()=>{
        setStatus(true)}
    handleOffline=()=>{
        setStatus(false)
    }
    useEffect(()=>{
        window.addEventListener('online',handleOnline)
        window.addEventListener('offline',handleOffline)
        return()=>{
            window.removeEventListener('online',handleOnline)
            window.removeEventListener('offline',handleOffline)
        }
    },[])
    return onlineStatus
}
export default useOnlineStatus