import { Link } from 'react-router-dom'

import Display from './Display'
import PanelDeBotones from './PanelDeBotones'
import { Component } from "react";
import Operaciones from '../logic/Operaciones';


/*const Calculadora = () => {

    state = {
        total: null,
        siguiente: null,
        operador: null,
    }
    
    return (
        <div>
            <Link to={'/'}> Regrsar al menú</Link>

            <div>
                <Display value={this.state.siguiente || this.state.total || "0"}/>
            </div>
        </div>
    )

}*/
class Calculadora extends Component {
    state = {
        total: null,
        siguiente: null,
        operador: null,
    }

    handleClick = nombreDeBoton => this.setState(Operaciones(this.state, nombreDeBoton))

    render() {
        return (
            <div>
                <Link to={'/'}> Regrsar al menú</Link>
                
                <div>
                    <Display value={this.state.siguiente || this.state.total || "0"} />
                    
                    <PanelDeBotones clickHandle={this.handleClick} />
                </div>
            </div>
        );
    }
}

//exportar
export default Calculadora;