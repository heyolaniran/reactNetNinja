import { useState } from "react";

export default function Home ()
{
    const [likes, setLikes] = useState(80)  
    const handleClick = () => {
         
        setLikes(likes +1) ; 
       
    }

    const [blogs, setBlogs] = useState([
        {title : 'Welcome Article', body : 'Lorem ipsum ...', author: 'Me', id : 1}, 
        {title : 'Welcome 2  Article', body : 'Lorem ipsum ...', author: 'Me', id : 2}, 
        {title : 'Welcome 3 Article', body : 'Lorem ipsum ...', author: 'Me', id : 3}, 
    ])
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
                    Click me 
                </button>
            </div>

            <div>
                {
                    blogs.map((blog) => (
                        <div className="hover:shadow-xs shadow-lg mb-4 bg-white rounded-lg px-6 py-2" key={blog.id}>
                            <h1 className="text-2xl font-semibold text-blue-600">{blog.title}</h1>
                            <span className="text-md"> By {blog.author}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}