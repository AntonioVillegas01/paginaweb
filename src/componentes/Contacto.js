import React, {Component} from 'react';
import '../css/contacto.css'

class Contacto extends Component {
    render() {
        return (
            <form>
                <legend>Formulario de Contacto</legend>
                <div className="input-field">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" placeholder="Tu Nombre"/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Tu E-mail"/>
                </div>
                <div className="input-field">
                    <label htmlFor="mensaje">Mesaje:</label>
                    <textarea></textarea>
                </div>
                <div className="input-field enviar">
                    <input type="submit" value="Enviar"/>

                </div>
            </form>
        );
    }
}

export default Contacto;