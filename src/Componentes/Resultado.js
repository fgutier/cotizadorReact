import React, { Component } from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Resultado extends Component{
    mostrarResultado = () =>{

    }
    render(){
        const resultado = this.props.resultado;
        const mensaje = (!resultado) ? 'Elije Marca, Año y tipo de Seguro' : 'El Total es: $';
        return(
            <div className="gran-total">
                {mensaje}
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition classNames="resultado" key={resultado} timeout={{enter:1000, exit:500}} >
                        <span>{resultado}</span>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}

export default Resultado;