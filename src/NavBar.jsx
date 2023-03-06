import { Link } from "react-router-dom"
export default function NavBar() {

    return (
        <nav className="justify-between flex mt-4 ">
            <div className="jusitfy-start flex">
                <h1 className="text-xl font-semibold">
                    The Dojo Blog
                </h1>
            </div>
            <div className="flex pl-4">
                <Link to="/" className="ml-4">Home</Link>
                <Link to="/create">New Blog </Link>
            </div>
        </nav>
    )
}