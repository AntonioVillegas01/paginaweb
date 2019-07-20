import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navegacion from '../componentes/Navegacion'
import Productos from '../componentes/Productos'
import Nosotros from '../componentes/Nosotros'
import Contacto from '../componentes/Contacto'
import Error from '../componentes/Error'
import infoProductos from '../datos/datos'
import Header from "./Header";
import SingleProducto from "../componentes/SingleProducto";

class Router extends Component {

    state={
        productos : [],
        terminoBusqueda : ''
    }

    componentWillMount() {
        this.setState({
            productos : infoProductos
        })
    }

    busquedaProducto =(busqueda) =>{
        if(busqueda.length > 3){
            this.setState({
                terminoBusqueda : busqueda
            })
        }else{
            this.setState({
                terminoBusqueda : ''
            })
        }
    }

    render() {

        let productos = [...this.state.productos];
        let resultado;
        let busqueda = this.state.terminoBusqueda;
        if(busqueda !== ''){
            resultado = productos.filter(producto => (
                producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase() )!=-1
            ) )
        }else{
            resultado = productos
        }

        return (
            <BrowserRouter>
                <Header/>
                <Navegacion/>
                <Switch>
                    <Route exact path="/" render={()=>(
                        <Productos
                            productos={resultado}
                            busquedaProducto={this.busquedaProducto}
                        />
                    )}/>
                    <Route exact path="/nosotros" component={Nosotros}/>
                    <Route exact path="/productos" render={() => (
                        <Productos
                            productos={resultado}
                            busquedaProducto={this.busquedaProducto}
                        />
                        )} />
                    <Route exact path="/producto/:productoId" render={(props)=>{
                        let idProducto = props.location.pathname.replace('/producto/', '')
                        return(
                            <SingleProducto
                                key={idProducto}
                                producto={this.state.productos[idProducto]}
                            />
                        )
                    }}/>
                    <Route exact path="/contacto" component={Contacto}/>
                    <Route component={Error}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;