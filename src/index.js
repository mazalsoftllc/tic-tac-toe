/*********************************************************************
/** PUNTO DE ENTRADA. RENDERIZACIÓN EN LA RAÍZ DE LA ESTRUCTURA DOM **
/*********************************************************************/

/*********************************************************************
/**                 INICIO DE LA IMPORTACIÓN                        **
/*********************************************************************/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/*_______________________Fin de la importación_______________________*/


/*********************************************************************
/**               INICIO DE LA RENDERIZACIÓN PRINCIPAL              **
/*********************************************************************/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*______________________Fin de la renderización_______________________*/
