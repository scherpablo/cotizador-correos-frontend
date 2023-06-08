function Header() {
    const span = "Business Starter";

    return (
        <>
            <h1 className= "text-center text-5xl font-extrabold">
                Plan de correo <span className= "text-indigo-600 text-4xl">{ span }</span>
            </h1>
            <p className= "text-center text-1xl font-extrabold mt-3">Selecciona cantidad de correos y plazo para cotizar</p>
        </>
    )
}

//Exportamos el componente
export default Header;