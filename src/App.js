/**************************************************************************************
/** IMPLEMENTACIÓN DEL ALGORITMO DE UN JUEGO: 3 EN LÍNEA.                            **
/**                                                                                  **
/** "Tic-tac-toe, tres en raya, o Xs y Os es un juego de papel y lápiz para dos      **
/** jugadores que se turnan para marcar los espacios en una cuadrícula de tres       **
/** por tres con X u O. El jugador que logre colocar tres de sus marcas en un        **
/** fila horizontal, vertical o diagonal es el ganador." - WIKIPEDIA                 **                                                     **
/**                                                                                  **
/** Desarrollado por: Documentación oficial de React - https://beta.reactjs.org      **
/** Personalizado por: Mauricio Chara, para Mazalsoft - https://wwwmazalsoft.xyz     **
/** Fecha: 28/01/2023.                                                               **
/** Locación: Colombia(Dosquebradas, Risaralda).                                     **
/** Contacto: Redes sociales: @mauriciollc                                           **
/** Whatsapp: +57 3153774638                                                         **
/**************************************************************************************/

/********************************************
/** Paquete useState. | Recordar estados.  **
/********************************************/
import { useState } from 'react';

/********************************************
/**   Componente Square.   |    Ficha.     **
/** _______________________________________**
/** Propiedad #1: {value}                  **
/** Retorna: JSX <button>                  **
/********************************************/
function Square({value, onSquareClick}) {
   
    
  {/* Retornar elemento JSX <button>
    * El evento onClick invoca un método por referencia y su dirección(*puntero) es pasada
    * cómo propiedad {onSquareClick}.
    * */}  
  return <button className="square" onClick={onSquareClick}> {value} {/*Propiedad: value */} </button>;
}

/*_______________Fin componente Square(sub-componente)_______________*/


/********************************************
/** Componente Board. | Punto de entrada. **
/********************************************/
export default function Board() {
   
   {/* Variable de estado: xIsNext
     * Se utiliza para controlar los turnos en el juego.*/}
   const [xIsNext, setXIsNext] = useState(true);    
  
  {/* Variable de estado: squares */}
  const [squares, setSquares] = useState(Array(9).fill('Vacío'));
  
  {/* Función para controlar el evento clic en un cuadrado.
    * Accede a las variables definidas dentro d la función principal Board().
    * Parametro #1: {i} Es un indice.
    * */}
  function handleClick(i) {
    
    {/* Razonamiento lógico: Sí posición no es igual  a 'vacío' debería volver con return.
      * Esto evita que se modifique un botón con una figura ya establecida. */}
    if (squares[i] != 'Vacío') {
       return;
    }
    
    {/* La casilla está vacía, puede interactuar con ella.*/}
       
    const nextSquares = squares.slice(); {/* Es una copia del array squares a través del método .slice de JavaScript. */}
    
    {/* Razonamiento condicional: Sí {xIsNext} es igual a verdadero entonces nextSquares[i] = "X"
      * De lo contrario nextSquares[i] = "O" */}
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }  
    
    setSquares(nextSquares); {/* Actualiza el array con vigilancia de estado y asigna el nuevo array. */}
    
    {/* Cambiar de turno a través de una negación. */}
    setXIsNext(!xIsNext);
  }
  
  {/*Retornar contenedor de botones(elementos JSX: <button>) */}
  return(
    
    <>
    
      {/* Fila del tablero #1:  <div> (esto es una fila)*/}
      <div className="board-row">
      
        {/* Elemento JSX #1:  <square>*/}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} /> {/*Propiedad value es igual a item en indice 0.*/}
      
        {/* Elemento JSX #2:  <square>*/}
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} /> {/*Propiedad value es igual a item en indice 1.*/}
        
        {/* Elemento JSX #3:  <square>*/}
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} /> {/*Propiedad {value} es igual a item en indice 2.*/}
        
      </div>
      
      {/* Fila del tablero #2:  <div> (esto es una fila)*/}
      <div className="board-row">
      
        {/* Elemento JSX #4:  <square>*/}
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} /> {/*Propiedad {value} es igual a item en indice 3.*/}
      
        {/* Elemento JSX #5:  <square>*/}
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/> {/*Propiedad {value} es igual a item en indice 4.*/}
      
        {/* Elemento JSX #6:  <square>*/}
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/> {/*Propiedad {value} es igual a item en indice 5.*/}
        
      </div>
      
      {/* Fila del tablero #3:  <div> (esto es una fila)*/}
      <div className="board-row">
      
        {/* Elemento JSX #7:  <square>*/}
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} /> {/*Propiedad {value} es igual a item en indice 6.*/}
      
        {/* Elemento JSX #8:  <square>*/}
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} /> {/*Propiedad {value} es igual a item en indice 7.*/}
      
        {/* Elemento JSX #9:  <square>*/}
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/> {/*Propiedad {value} es igual a item en indice 8.*/}
      
      </div>
      
    </>
  );
}
/*_______________Fin componente Board(Punto de entrada)_______________*/
