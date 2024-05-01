import { useEffect, useState } from "react"
import { fetchApiData } from "../utlis/api";

function UseFetch(url) {

    const [loading,setLoading] = useState(null);
    const [data,setData] = useState('');
    const [error,setError] = useState('');

useEffect( ()=>{
 setLoading('Loading....')
 setData('');
 setError('');

fetchApiData(url).then((res) => {
    setLoading(false);
    setData(res)
    
}).catch( (err)=>{
    setLoading(false);
    setError("error")
})
 
},[url])



return {data,error,loading}

    
}

export default UseFetch