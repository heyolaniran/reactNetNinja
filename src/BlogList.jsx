export default function BlogList ({blogs, title}) {


    return (
        <div className="blogList mt-4">

            <div>
                <h2 className="text-center text-2xl"> {title }</h2>
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