import Home from './HomeComponent';
import Header from "./HeaderComponent";
import Managers from "./ManagersComponent";
import Contacto from "./ContactoComponent";
import Descargas from "./DescargasComponent";
import Footer from "./FooterComponent";

import Canciones from  "../crud/canciones/Canciones";
import Delete from  "../crud/canciones/Delete";
import Edit from  "../crud/canciones/Edit";
import Create from  "../crud/canciones/Create";

import { Switch,Route,Redirect } from 'react-router-dom';
import {React,useState,useEffect} from "react"

function Main(){

        return(
        <div className="cuerpo">
            <Header/>
                <Switch>
                    <Route path="/home" component={() => <Home />}/>
                    <Route path="/canciones" component={() => <Canciones />}/>
                    <Route path="/create" component={() => <Create />}/>
                    <Route path="/cancion/:id" component={() => <Delete />}/>
                    <Route path="/edit/:id" component={() => <Edit />}/>
                    
                    <Route path="/managers" component={() => <Managers />}/>
                    <Route path="/descargas" component={() => <Descargas />}/>
                    
                    <Route path="/contact" component={() => <Contacto />}/>
                    <Redirect to="/home"/>
                </Switch>
            <Footer/>
        </div>
        );
}

export default Main;