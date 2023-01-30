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


/***********************************************
/** Componente Board. | Componente principal. **
/***********************************************/
function Board({ xIsNext, squares, onPlay }) {
    
 
  
  {/* Función para controlar el evento clic en un cuadrado.
    * Accede a las variables definidas dentro d la función principal Board().
    * Parametro #1: {i} Es un indice.
    * */}
  function handleClick(i) {
    
    {/* Razonamiento lógico: Sí posición no es igual  a 'vacío' debería volver con return.
      * Esto evita que se modifique un botón con una figura ya establecida. */}
    if ( squares[i]  || calculateWinner(squares)) {
       return;
    }
    
    {/* La casilla está vacía, puede interactuar con ella.
      * Aún no hay un ganador.*/}
       
    const nextSquares = squares.slice(); {/* Es una copia del array squares a través del método .slice de JavaScript. */}
    
    {/* Razonamiento condicional: Sí {xIsNext} es igual a verdadero entonces nextSquares[i] = "X"
      * De lo contrario nextSquares[i] = "O" */}
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }  
    
    {/* Registrar movimiento. */}
    onPlay(nextSquares);
    
  }
  
  {/* Mensajes del juego. Informar el turno actual o ganador del juego. */}
  const winner = calculateWinner(squares); {/* Encontrar un ganador. */}
  let status; {/* Estado del juego. */}
  if (winner) {
    status = "Ganador: " + winner;
  } else {
    status = "Siguiente turno: " + (xIsNext ? "X" : "O");
  }
  
  {/*Retornar contenedor de botones(elementos JSX: <button>) */}
  return(
    
    <>
    
      {/* Mensajes del juego. */}
      <h1 className="status">{status}</h1>
    
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
/*_______________Fin componente Board(Componente principal)_______________*/

/********************************************
/** Componente Game. | Punto de entrada. **
/********************************************/
export default function Game() {
  
  {/* Variable de estado: xIsNext
     * Se utiliza para controlar los turnos en el juego.*/}
  const [xIsNext, setXIsNext] = useState(true);    
  
  {/* Variable de estado: history */}
  const [history, setHistory] = useState([Array(9).fill(null)]);
  
  {/* Variable de estado: currentMove*/}
  const [currentMove, setCurrentMove] = useState(0);
  
  {/* Registro de la Partida actual. */}
  const currentSquares = history[currentMove];
  
  {/* Controlar la línea de tiempo del juego. */}
  function handlePlay(nextSquares) {
    
    {/* Registrar el hito de movimiento en la línea de tiempo. */}
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    
    {/* Establecer el siguiente turno. */}
    setXIsNext(!xIsNext);
    
  }
  
  {/* Función realizar saltos en la línea de tiempo. */}
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li>
        <button className="jump-to" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  
  return (
  
    <>
      
      {/* Título */}
      <h1> ¡Bienvenido/a al juego Tres en línea! </h1>
      
      <div className="game">{/* Contenedor principal del juego. */}
          
          
       {/* Contenedor del tablero del juego. */}
       <div className="game-board">
           {/* Utilizar el componente tablero con propiedades anexas. */}
           <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      
      </div>
    
      {/* Pie de página. */}

      <h2> Personalización: <a href="https://www.mazalsoft.xyz/juego-tic-tac-toe" target="_blank">Mauricio Chara Hurtado para Mazalsoft </a> </h2>
      <br />
      <h2> Fuente documental: <a href="https://beta.reactjs.org/learn/tutorial-tic-tac-toe" target="_blank">React Docs - BETA </a> </h2>


   </>
  );
}

/*_______________Fin componente Game(Punto de entrada)_______________*/


/**************************************************************
/** Función | Razonamiento lógico para encontrar un ganador. **
/**************************************************************/
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
/*_______________Fin función encontrar un ganador._______________*/