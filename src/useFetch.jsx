import { useEffect, useState } from "react";
export default function useFetch (url) 
{

    const [isPending, setIsPending] = useState(true) ; 
    const [error,setErrors] = useState(null)
    const [data, setData] = useState(null) 

        useEffect(() => {
            const abortCont = new AbortController() ; 
            setTimeout(() => {
                fetch(url, {signals : abortCont.signal})
                .then((res) =>{
                    if(!res.ok)
                    {
                        throw Error("Something went wrong") ; 
                    }
                return res.json()
            })
            .then((data) => {
                setData(data)
                setIsPending(false)
                setErrors(null)
            })
            .catch(err => {
                if(err.name === 'AbortError')
                {
                    return () => console.log("zzz")
                }else 
                {
                    setIsPending(false)
                    setErrors(err.message)
                }
               
            })
            }, 1000);

            return () => abortCont.abort()  ; 
        }, [url]) 
    

    return {data , isPending, error} ;


}