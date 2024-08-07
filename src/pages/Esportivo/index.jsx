import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Esportivo.module.css';
import Card from '../../componentes/card'



function sport() {
  const [sportycars, setsportyCars] = useState([]);

  useEffect(() => {
    const buscarCarros = async () => {

        const response = await fetch('./carrosesportivos.json');
        const data = await response.json();
        console.log(data.sporty_cars);
        setsportyCars(data.sporty_cars); 
    };

    buscarCarros();
  }, []);

  return (
    <body> 
    <div className={styles.sport}>
      <h1>Carros Esportivos</h1>
      <ul >
        {sportycars.map((item, index) => (
       

          <Card
          key={index}
          item = {item.brand}
          modelo={item.model}
          engine={item.engine}
          potencia={item.horsepower}
          velocidade={item.top_speed_mph}
          preco={item.price_usd}
          />
          
          )
          
          )}         
        
      </ul>
    </div>
    </body>
  );
}
export default sport
