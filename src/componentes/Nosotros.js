import React, {Component} from 'react';
import '../css/nosotros.css'

class Nosotros extends Component {
    render() {
        return (
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="imagen nosotros"/>
                </div>
                <div className="contenido">
                    <h2>Sobre nosotros</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corporis delectus dolor fuga ipsam laborum magni, maiores nam nobis reiciendis, rerum saepe. Asperiores ea explicabo incidunt molestiae quo velit voluptatem.</p>
                </div>
            </div>
        );
    }
}

export default Nosotros;