import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Create() {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('Me')
    const [body , setBody] = useState('')
    const [isPending, setIsPending] = useState(false) ; 
    const navigate = useNavigate() ; 
    const handleSubmit = (e) => {
        e.preventDefault() ; 

        const blog = {title, body, author} ; 
        setIsPending(true)
        fetch('http://localhost:8000/blogs', {
            method : 'POST', 
            headers : {"Content-Type" :  "application/json"}, 
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false)
            navigate("/") ; 
        })
    }

    return (
        <div className="create">
            <h2 className="text-xl font-semibold text-center"> Create New Articles for your blog</h2>


            <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="lg:col-span-2 lg:py-12">
                    <p className="max-w-xl text-lg text-center">
                  Create a new blog article 
                    </p>
                </div>

                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form action="" className="space-y-4" onSubmit={handleSubmit}>
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
                        value={author}
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
                        value={body}
                        onChange= {(e) => setBody(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="mt-4">
                        {!isPending &&  <button
                        type="submit"
                        className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 font-medium justify-center text-white sm:w-auto"
                        >
                        Add Article
                        </button>}
                        {isPending && <button
                        type="submit"
                        disabled
                        className="inline-block w-full rounded-lg bg-gray-400 px-5 py-3 font-medium justify-center text-white sm:w-auto"
                        >
                        Adding new Article...
                        </button>}
                       
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </section>

        </div>
    )
}