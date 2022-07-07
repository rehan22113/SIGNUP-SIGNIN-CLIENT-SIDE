import React,{useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const Logout=()=>{
    const history=useHistory();
const callLogout=async()=>{
   const res=await fetch("/logout",{
        method:"GET",
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }) 
    if(res.status===200){
        history.push("/signin")
    }else{
        history.push("/dashboard")
    } 
}
    useEffect(() => {
        callLogout();
    }, []);
    return<>
    <h1>Logout page</h1>
    </>
}

export default Logout