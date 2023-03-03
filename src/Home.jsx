import { useState, useEffect } from "react";
import BlogList from "./BlogList";

export default function Home ()
{
    const [likes, setLikes] = useState(80)  
    const handleClick = () => {
         
        setLikes(likes +1) ; 
       
    }

    const [isPending, setIsPending] = useState(true) ; 

    const [blogs, setBlogs] = useState(null) 



    const [name, setName] = useState('Abdias') ; 

    useEffect(() => {
        setTimeout(() => {
            fetch('  http://localhost:8000/blogs').then((res) =>{
            return res.json()
        })
        .then((data) => {
            setBlogs(data)
            setIsPending(false)
        })
        }, 1000);
    }, []) ; 
    
    return (
        <div className="mt-4">
            <h1 className="text-center text-2xl">
                Welcome to the Dojo Blog
            </h1>
            <p className="text-center">
                React Is an Javacript library liked more than <span className='font-semibold'>{likes} </span>M times 
            </p>


            <div className="justify-center flex mt-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold"
                    onClick={handleClick}
                >
                    Click Here  
                </button>
            </div>

            {isPending && <div>Loading data ....</div>}
            {blogs && <BlogList blogs={blogs} title='All Articles' />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Me')} title='My Articles' />}
        </div>
    )
}