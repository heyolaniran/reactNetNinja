import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";
export default function BlogEdit () {
    const { id } = useParams() ; 
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [body , setBody] = useState('')
    const {data: article, isPending, error} = useFetch(`http://localhost:8000/blogs/${ id }`) ; 


  
    

  
    const navigate = useNavigate() ; 
    const [isEditing, setIsEditing] = useState(false)

    const handleEdit = (e) => {
        e.preventDefault() ; 
        const blog = { title, body, author } ; 
        setIsEditing(true)
        fetch('http://localhost:8000/blogs/'+id, {
            method: 'PUT', 
            headers: {"Content-Type" : "application/json"}, 
            body : JSON.stringify(blog)
        }).then(() => {

            setIsEditing(false)
            navigate("/blog/"+id) ; 

        })
    } 

    return (
        <div className="blog-edit">
            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <p className="max-w-xl text-lg text-center">
                            Edit blog article n° { id }
                        </p>
                        {isPending && <div>Loading article details...</div> }
                        {error && <div className="bg-red-200 text-black font-medium p-4"> { error }</div> }

                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        {article && (
                            <form action="" className="space-y-4" onSubmit={handleEdit}>
                                <div>
                                    <label className="sr-only" htmlFor="title">Article Title</label>
                                    <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Title"
                                    type="text"
                                    required
                                    
                                    value={title}
                                    onChange= {(e) => setTitle(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="title">Article Author</label>
                                    <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Author"
                                    type="text"
                                    required
                                    value={article.author}
                                    onChange= {(e) => setAuthor(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="message">Message</label>

                                    <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Message"
                                    rows="8"
                                    required
                                    value={article.body}
                                    onChange= {(e) => setBody(e.target.value)}
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    {!isEditing &&  <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 font-medium justify-center text-white sm:w-auto"
                                    >
                                    Edit Article
                                    </button>}
                                    {isEditing && <button
                                    type="submit"
                                    disabled
                                    className="inline-block w-full rounded-lg bg-gray-400 px-5 py-3 font-medium justify-center text-white sm:w-auto"
                                    >
                                    Editing new Article...
                                    </button>}
                                
                                </div>
                            </form>
                        )}
                        
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}