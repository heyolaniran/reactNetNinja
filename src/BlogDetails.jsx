import { useParams, Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useFetch from "./useFetch";

export default function BlogDetails () {
  const { id } = useParams() ; 
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' +id) ; 
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)

    const handleDelete = () => {

        MySwal.fire({
            title: <p>Confirmer la suppression ?</p>,
            confirmButtonText: 'Supprimer', 
            confirmButtonColor: "red"  ,
            cancelButtonText: "Annuler", 
            showCancelButton: true
          }).then((result) => {
            if((result.isConfirmed))
            {
                fetch("http://localhost:8000/blogs/"+blog.id, {
                    method: 'DELETE', 
                    headers: {"Content-Type": "application/json"}, 
                    body: JSON.stringify(blog)
                }).then(() => {
                    navigate("/")
                })
            }else 
            {
                MySwal.fire({
                    title: <p>Vous venez d'annuler la suppression </p>
                })
            }
          })

    }

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

                    <div className="justify-center flex mt-4">
                        <Link to={`/edit/${id}`} className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium justify-center text-white sm:w-auto"> Editer </Link>
                        <button className="ml-4 inline-block w-[80px] rounded-lg bg-red-400 font-medium text-white" onClick={handleDelete}>  Delete </button>
                    </div>
                </div>
               
            )
            }
            
        </div>
    )
}