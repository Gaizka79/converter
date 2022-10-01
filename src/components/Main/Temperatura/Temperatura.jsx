import React from "react";

import intercambio from '../../../assets/intercambio.png';

function Temperatura () {
  return (
    <div className="temperatura">
      Temperatura
      <div className="unidades">
        <label htmlFor="desde">Desde:</label>
        <select name="desde" id="desde">
          <option value="gr">Gramos</option>
          <option value="lb">Libras</option>
          <option value="oz">Onzas</option> 
        </select>

        <label htmlFor="hasta">Hasta:</label>
        <select name="hasta" id="hasta">
          <option value="gr">Gramos</option>
          <option value="lb">Libras</option>
          <option value="oz">Onzas</option>
        </select>
      </div>
      <div className="camposdecambio">
        <input type="text" name="convertir1" id="convertir1" />
        <button><img src={intercambio} alt="intercambio" className="intercambio" id="intercambio" /></button>
        <input type="text" name="convertir2" id="convertir2" />
      </div>
    </div>
  )
  
}

export default Temperatura;
