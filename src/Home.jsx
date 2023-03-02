export default function Home ()
{
    const likes = 80 
    const handleClick = (likes) => {
        likes = likes + 1 
        console.log(" now React i liked " + likes + " M times") ; 
    }
    return (
        <div className="mt-4">
            <h1 className="text-center text-2xl">
                Welcome to the Dojo Blog
            </h1>
            <p>
                React Is an Javacript library liked more than <span className='font-semibold'>{likes} </span>M times 
            </p>


            <div className="justify-center flex mt-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold"
                    onClick={ () => handleClick(likes)}
                >
                    Click me 
                </button>
            </div>
        </div>
    )
}