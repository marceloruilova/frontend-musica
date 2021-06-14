import React, {useState} from 'react';
import {Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem,Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import logo from "../imgs/—Pngtree—guitar and surfing board in_5312586.png";

const Header =()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

        return(
            /*tambien <></>*/
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={toggle} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src={logo} height="30" width="41" alt='Musica App' />
                        </NavbarBrand>
                        <Collapse isOpen={isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'>
                                        <span className="fa fa-home fa-lg"></span> Home
                                        </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/managers'>
                                        <span className="fa fa-info fa-lg"></span> Acerca de
                                        </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/descargas'>
                                        <span className="fa fa-list fa-lg"></span> Descargas
                                        </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contact'>
                                        <span className="fa fa-address-card fa-lg"></span> Contacto
                                        </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>LA MÚSICA ES UNIVERSAL</h1>
                                <p>Nos encargamos de brindarte una buena y 
                                    rapida forma de visualizar mucha de la información 
                                    de los artistas que màs te gusten en la industria.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }

export default Header;