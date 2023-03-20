import Botones from "./Botones";
import './paneldebotones.css'

const PanelDeBotones = ({clickHandle}) => {

    const handleClick = nombreDeBoton => { clickHandle(nombreDeBoton) }

    return (
        <div className="component-button-panel">
            
            <div>
                <Botones name="sin" clickHandle={handleClick} gray/>
                <Botones name="cos" clickHandle={handleClick} gray/>
                <Botones name="tan" clickHandle={handleClick} gray/>
                <Botones name="AC" clickHandle={handleClick} gray/>
            </div>
            <div>
                <Botones name="x²" clickHandle={handleClick} gray/>
                <Botones name="x³" clickHandle={handleClick} gray/>
                <Botones name="&radic;" clickHandle={handleClick} gray/>
                <Botones name="log" clickHandle={handleClick} gray/>
            </div>
            <div>
                <Botones name="π" clickHandle={handleClick} gray/>
                <Botones name="+/-" clickHandle={handleClick} gray/>
                <Botones name="%" clickHandle={handleClick} gray/>
                <Botones name="/" clickHandle={handleClick} orange/>
            </div>
            <div>
                <Botones name="7" clickHandle={handleClick}/>
                <Botones name="8" clickHandle={handleClick}/>
                <Botones name="9" clickHandle={handleClick}/>
                <Botones name="x" clickHandle={handleClick} orange/>
            </div>
            <div>
                <Botones name="4" clickHandle={handleClick}/>
                <Botones name="5" clickHandle={handleClick}/>
                <Botones name="6" clickHandle={handleClick}/>
                <Botones name="-" clickHandle={handleClick} orange/>
            </div>
            <div>
                <Botones name="1" clickHandle={handleClick}/>
                <Botones name="2" clickHandle={handleClick}/>
                <Botones name="3" clickHandle={handleClick}/>
                <Botones name="+" clickHandle={handleClick} orange/>
            </div>
            <div>
                <Botones name="0" clickHandle={handleClick} wide/>
                <Botones name="." clickHandle={handleClick}/>
                <Botones name="=" clickHandle={handleClick} orange/>
                
            </div>
        </div>
    );
}

export default PanelDeBotones;