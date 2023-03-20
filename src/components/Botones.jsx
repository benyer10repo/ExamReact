

export default function Botones({clickHandle, name}){

    const handleClick = () => clickHandle(name)

    return (
        <div>
            <button onClick={handleClick}>{name}</button>
        </div>
    );
}

//exportar
//export default Botones;