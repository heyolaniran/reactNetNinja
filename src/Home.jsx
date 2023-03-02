export default function Home ()
{
    const likes = 80 
    return (
        <div className="mt-4">
            <h1 className="text-center text-2xl">
                Welcome to the Dojo Blog
            </h1>
            <p>
                React Is an Javacript library liked more than <span className='font-semibold'>{likes} </span>M times 
            </p>
        </div>
    )
}