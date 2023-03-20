
import Big from "big.js";
import Operate from "./Operate";
import IsNumber from "./IsNumber";

const Operaciones = (estado,nombreDeBoton) => {

    if(nombreDeBoton === "AC"){
        return{
            total: null,
            siguiente: null,
            operador: null,
        };
    }

    if(IsNumber(nombreDeBoton)){

        if(nombreDeBoton === "0" && estado.siguiente === "0") return{data:"ninguna"}

        if(estado.operador){
            if(estado.siguiente) return {siguiente: estado.siguiente + nombreDeBoton}

            return{siguiente: nombreDeBoton}
        }

        if(estado.siguiente){

            const siguiente = estado.siguiente === "0" ? nombreDeBoton: estado.siguiente + nombreDeBoton;
    
            return{siguiente,total:null,}
        }

        return {siguiente: nombreDeBoton,total:null,}
    }
    
    if(nombreDeBoton === "%"){
        
        if(estado.operador && estado.siguiente){

            const result = Operate(estado.total, estado.siguiente, estado.operador)

            return{total: Big(result).div(Big("100")).toString(),siguiente:null,operador:null,}
        }

        if(estado.siguiente){
            return {siguiente: Big(estado.siguiente).div(Big("100")).toString(),}
        }

        return {}
    }
    if(nombreDeBoton ==="x²"){
        if(estado.operador && estado.siguiente){

            const result = Operate(estado.total, estado.siguiente, estado.operador)

            return{total: Math.pow(Big(result),2).toString(),siguiente:null,operador:null,}
        }
        if(estado.siguiente){
            return {siguiente: Math.pow(Big(estado.siguiente),2).toString(),}
        }
        return {}
    }
    if(nombreDeBoton ==="x³"){
        if(estado.operador && estado.siguiente){

            const result = Operate(estado.total, estado.siguiente, estado.operador)

            return{total: Math.pow(Big(result),3).toString(),siguiente:null,operador:null,}
        }
        if(estado.siguiente){
            return {siguiente: Math.pow(Big(estado.siguiente),3).toString(),}
        }
        return {}
    }
    if(nombreDeBoton === 	'\u221A'){
        if(estado.operador && estado.siguiente){

            const result = Operate(estado.total, estado.siguiente, estado.operador)

            return{total: Math.sqrt(Big(result)).toString(),siguiente:null,operador:null,}
        }
        if(estado.siguiente){
            return {siguiente: Math.sqrt(Big(estado.siguiente)).toString(),}
        }
        return {}
    }
    if(nombreDeBoton ==="log"){
        if(estado.operador && estado.siguiente){

            const result = Operate(estado.total, estado.siguiente, estado.operador)

            return{total: Math.log10(Big(result)).toString(),siguiente:null,operador:null,}
        }
        if(estado.siguiente){
            return {siguiente: Math.log10(Big(estado.siguiente)).toString(),}
        }
        return {}
    }
    if(nombreDeBoton ==="π"){
        if(estado.operador && estado.siguiente){

            const result = Operate(estado.total, estado.siguiente, estado.operador)

            return{total: (Math.PI).toString(),siguiente:null,operador:null,}
        }
        if(estado.siguiente){
            return {siguiente: (Math.PI).toString(),}
        }
        return {total: (Math.PI).toString(),}
    }
    if(nombreDeBoton ==="cos"){
        if(estado.operador && estado.siguiente){

            const result = Operate(estado.total, estado.siguiente, estado.operador)

            return{total: (Math.cos(Big(result))).toString(),siguiente:null,operador:null,}
        }
        if(estado.siguiente){
            return {siguiente: (Math.cos(Big(estado.siguiente))).toString(),}
        }
        return {}
    }
    if(nombreDeBoton ==="sin"){
        if(estado.operador && estado.siguiente){

            const result = Operate(estado.total, estado.siguiente, estado.operador)

            return{total: Math.sin(Big(result)).toString(),siguiente:null,operador:null,}
        }
        if(estado.siguiente){
            return {siguiente: Math.sin(Big(estado.siguiente)).toString(),}
        }
        return {}
    }
    if(nombreDeBoton ==="tan"){
        if(estado.operador && estado.siguiente){

            const result = Operate(estado.total, estado.siguiente, estado.operador)

            return{total: Math.tan(Big(result)).toString(),siguiente:null,operador:null,}
        }
        if(estado.siguiente){
            return {siguiente: Math.tan(Big(estado.siguiente)).toString(),}
        }
        return {}
    }

    if(nombreDeBoton ==="."){

        if(estado.siguiente){
            if(estado.siguiente.includes(".")) return {}

            return {siguiente: estado.siguiente + "."}
        }

        return {siguiente: "0."}
    }

    
    if (nombreDeBoton === "=") {
  
        if (estado.siguiente && estado.operador) {
    
          return {
            total: Operate(estado.total, estado.siguiente, estado.operador),
            siguiente: null,
            operador: null,
          }
    
        } else return {}
    
    }


    if (nombreDeBoton === "+/-") {
  
        if (estado.siguiente) return { siguiente: (-1 * parseFloat(estado.siguiente)).toString() }
    
        if (estado.total) return { total: (-1 * parseFloat(estado.total)).toString() }
    
        return {}
    
    }

    if (estado.operador) {
  
        return {
          total: Operate(estado.total, estado.siguiente, estado.operador),
          siguiente: null,
          operador: nombreDeBoton,
        }
    
    }

    if (!estado.siguiente) return { operador: nombreDeBoton }

    return {
        total: estado.siguiente,
        siguiente: null,
        operador: nombreDeBoton,
    }

}

export default Operaciones;