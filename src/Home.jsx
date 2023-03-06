import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch.jsx";

export default function Home ()
{
    const [likes, setLikes] = useState(80)  
    const handleClick = () => {
         
        setLikes(likes +1) ; 
       
    }




    const [name, setName] = useState('Abdias') ; 

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
   
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


            {isPending && <div> {isPending} </div>}

            {isPending && <div>Loading data ....</div>}
            {blogs && <BlogList blogs={blogs} title='All Articles' />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Me')} title='My Articles' />}
        </div>
    )
}