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
/** Componente Board. | Punto de entrada. **
/********************************************/
export default function Board() {
  {/*Retornar contenedor de botones(elementos JSX: <button>) */}
  return(
    
    <>
    
      {/* Fila del tablero #1:  <div> (esto es una fila)*/}
      <div className="board-row">
      
        {/* Elemento JSX #1:  <button>*/}
        <button className="square">1</button>
      
        {/* Elemento JSX #2:  <button>*/}
        <button className="square">2</button>
      
        {/* Elemento JSX #3:  <button>*/}
        <button className="square">3</button>
        
      </div>
      
      {/* Fila del tablero #2:  <div> (esto es una fila)*/}
      <div className="board-row">
      
        {/* Elemento JSX #4:  <button>*/}
        <button className="square">4</button>
      
        {/* Elemento JSX #5:  <button>*/}
        <button className="square">5</button>
      
        {/* Elemento JSX #6:  <button>*/}
        <button className="square">6</button>
        
      </div>
      
      {/* Fila del tablero #3:  <div> (esto es una fila)*/}
      <div className="board-row">
      
        {/* Elemento JSX #7:  <button>*/}
        <button className="square">7</button>
      
        {/* Elemento JSX #8:  <button>*/}
        <button className="square">8</button>
      
        {/* Elemento JSX #9:  <button>*/}
        <button className="square">9</button>
      
      </div>
      
    </>
  );
}
/*_______________Fin componente Board(Punto de entrada)_______________*/
