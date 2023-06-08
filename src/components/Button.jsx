// eslint-disable-next-line react/prop-types
function Button({ operador, fn }) {
    return (
        <>
            <button
                type="button"
                className="h-10 w-10 flex items-center justify-center text-white bg-lime-600 text-2xl font-extrabold rounded-full hover-outline-none  hover:ring-2 hover:ring-offset-2 hover:lime-rose-600"
                onClick={fn}
            >
                {operador}
            </button>
        </>
    )
}

export default Button