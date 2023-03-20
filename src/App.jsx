
import './App.css'
import { Link } from 'react-router-dom'
const App = () => {

  return (
    <div className="App">
      
      <h1>EXAMEN DE REACT</h1>

      <div> 
        <h1><Link to={'/calculadora'}> Click 	&raquo; PREGUNTA 2 : CALCULADORA</Link></h1> 
      </div>
      
      
    </div>
  )
}

export default App
