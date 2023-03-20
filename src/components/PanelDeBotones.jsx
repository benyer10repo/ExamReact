import Botones from "./Botones";


export default function PanelDeBotones ({clickHandle}){

    const handleClick = nombreDeBoton => { clickHandle(nombreDeBoton) }

    return (
        <div>
            <div>
                <Botones name="AC" clickHandle={handleClick}/>
                <Botones name="+/-" clickHandle={handleClick}/>
                <Botones name="%" clickHandle={handleClick}/>
                <Botones name="/" clickHandle={handleClick}/>
            </div>
            <div>
                <Botones name="7" clickHandle={handleClick}/>
                <Botones name="8" clickHandle={handleClick}/>
                <Botones name="9" clickHandle={handleClick}/>
                <Botones name="x" clickHandle={handleClick}/>
            </div>
            <div>
                <Botones name="4" clickHandle={handleClick}/>
                <Botones name="5" clickHandle={handleClick}/>
                <Botones name="6" clickHandle={handleClick}/>
                <Botones name="-" clickHandle={handleClick}/>
            </div>
            <div>
                <Botones name="1" clickHandle={handleClick}/>
                <Botones name="2" clickHandle={handleClick}/>
                <Botones name="3" clickHandle={handleClick}/>
                <Botones name="+" clickHandle={handleClick}/>
            </div>
            <div>
                <Botones name="0" clickHandle={handleClick}/>
                <Botones name="." clickHandle={handleClick}/>
                <Botones name="=" clickHandle={handleClick}/>
                
            </div>
        </div>
    );
}

