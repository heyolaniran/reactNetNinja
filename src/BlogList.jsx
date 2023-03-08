import { Link } from "react-router-dom"
export default function BlogList ({blogs, title}) {


    return (
        <div className="blogList mt-4">


            <div>
                <h2 className="text-center text-2xl"> {title }</h2>
                <div class="grid grid-cols-1 md:grid-cols-4 py-4 ">
                   {
                        blogs.map((blog) => (
                            <article className=" mt-2 mr-4 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm" key={blog.id}>
                                <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                                    <time datetime="2022-10-10" className="block text-xs text-gray-500">
                                    by {blog.author}
                                    </time>

                                    <Link to={`/blog/${blog.id}`}>
                                        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                            {blog.title}
                                        </h3>
                                    </Link>

                                    <div className="mt-4 flex flex-wrap gap-1">
                                    
                                        <span
                                            className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                                        >
                                            Article
                                        </span>
                                    </div>
                                </div>
                            </article>
                            
                        ))
                    }
                </div>
               
            </div>
        </div>
    )
}