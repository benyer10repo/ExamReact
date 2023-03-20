import { Link } from 'react-router-dom'

import Display from './Display'
import PanelDeBotones from './PanelDeBotones'
import { Component } from "react";
import Operaciones from '../logic/Operaciones';
import './calculadora.css'



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
                <h2> <Link to={'/'}> Click 	&raquo; REGRESAR AL MENÚ</Link></h2>
                
                <div className='comoponent-app'>
                    <Display value={this.state.siguiente || this.state.total || "0"} />
                    
                    <PanelDeBotones clickHandle={this.handleClick} />
                </div>
            </div>
        );
    }
}

//exportar
export default Calculadora;