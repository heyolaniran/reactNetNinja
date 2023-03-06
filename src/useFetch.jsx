import { useEffect, useState } from "react";
export default function useFetch (url) 
{

    const [isPending, setIsPending] = useState(true) ; 
    const [error,setErrors] = useState(null)
    const [data, setData] = useState(null) 

    return (
        useEffect(() => {
            setTimeout(() => {
                fetch(url)
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
                setIsPending(false)
                setErrors(err.message)
            })
            }, 1000);
        }, [url]) 
    )
}