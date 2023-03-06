import { useState } from "react"

export default function Create() {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('Me')
    const [body , setBody] = useState('')


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
                    <form action="" className="space-y-4">
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
                        <button
                        type="submit"
                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium justify-center text-white sm:w-auto"
                        >
                        Add Article
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </section>

        </div>
    )
}