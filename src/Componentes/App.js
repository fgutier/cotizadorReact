import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../Helper';

 
class App extends Component {
  state = {
    resultado: '',
    datos: {}
  }

  cotizarSeguros = (datos) => {
    const {marca, plan, year} = datos;

    //agregar base del seguro
    let resultado = 2000;

    // Obtener la diferencia de año
    const diferencia = obtenerDiferenciaAnio(year);

    //por cada año restar el 3% del valor del auto
    resultado -= ((diferencia * 3) * resultado) / 100;


    //Americano 15% asiatico 5% y europeo30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;

    // el plan del auto, incrementa 20% en plan basico y cobertura completa 50%
    let incrementoPlan = obtenerPlan(plan);

    //dependiendo del plan incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    //obejto para el resumen
    const datosAuto = {
      marca : marca,
      plan : plan,
      year : year
    }

    //resultados
    this.setState({
      resultado : resultado,
      datos: datosAuto
    })

  }
  render() {
    return (
      <div className="contenedor">
        <Header 
          titulo = 'Cotizador de Seguros de Autos'
        />

        <div className="contenedor-formulario">
          <Formulario 
            cotizarSeguros = {this.cotizarSeguros}
          />

        <Resumen 
        datos = {this.state.datos}
        resultado = {this.state.resultado}
        />
        </div>
      </div>
    );
  }
}

export default App;
