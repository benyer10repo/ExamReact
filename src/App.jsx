import Tabla from './components/Tabla'
import './App.css'
import { Link } from 'react-router-dom'
const App = () => {

  return (
    <div className="App">
      
      <h1>Examen React</h1>

      <div>
        <Link to={'/tabla'}> Pregunta Tabla</Link>  | 
        <Link to={'/calculadora'}> Pregunta Calculadora</Link>
      </div>
      
      
    </div>
  )
}

export default App
