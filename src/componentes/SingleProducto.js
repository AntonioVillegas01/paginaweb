import React from 'react';
import '../css/SingleProducto.css'
import {NavLink} from "react-router-dom";

const SingleProducto = (props) => {
    if(!props) return null;

    const {imagen,nombre,precio,descripcion} = props.producto

    return (
        <div className="info-producto">
            <div className="imagen">
                <img src={`/img/${imagen}.png`} alt={nombre}/>
            </div>
            <div className="info">
                <h2>{nombre}</h2>
                <p className="precio">${precio}</p>
                <p>{descripcion}</p>
                <br/>
                <NavLink to={'/productos'}>
                    <button className="butn">Regresar</button>
                </NavLink>
            </div>
        </div>
    );
};

export default SingleProducto;
