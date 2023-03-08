import { useParams, Link } from "react-router-dom"
import useFetch from "./useFetch";

export default function BlogDetails () {
  const { id } = useParams() ; 
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' +id) ; 
     console.log(blog)
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

                        <span className="mt-4 text-center flex justify-center"> { blog.body } </span>
                    </article>

                    <div className="justify-center flex">
                        <Link to={`/edit/${id}`} className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium justify-center text-white sm:w-auto"> Editer </Link>
                    </div>
                </div>
               
            )
            }
            
        </div>
    )
}