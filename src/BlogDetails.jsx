import { useParams } from "react-router-dom"
import useFetch from "./useFetch";

export default function BlogDetails () {
  const { id } = useParams() ; 
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' +id) ; 
  
    return (
        <div className="blog-details">
            {isPending && <div>Loading article details...</div> }
            {error && <div className="bg-red-200 text-black font-medium p-4"> { error }</div> }

            {blog && (
                <div>
                    <h2 className="text-xl text-center">
                    Article n° { id } Details 
                    </h2>

                    <article className=" justify-center">
                        <h2 className="text-xl text-blue-500 px-2 text-center"> { blog.title } </h2>
                        <p className="mt-2 text-center"> { blog.author } </p>

                        <span className="mt-4  flex justify-center"> { blog.body } </span>
                    </article>
                </div>
               
            )
            }
            
        </div>
    )
}