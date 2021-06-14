import React,{useState,useEffect} from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import axios from 'axios';
import i1 from "../imgs/1.jpeg";
import i2 from "../imgs/2.jpeg";
import i3 from "../imgs/3.jpeg";
import i4 from "../imgs/4.jpeg";
import i5 from "../imgs/5.jpeg";
import i6 from "../imgs/6.jpeg";

function Managers() {

    const[managers,setManagers]=useState([]);
    
    useEffect(()=>{ let fetch=async () => {
        const manager = await axios.get(
          'https://localhost:44350/api/Managers',
        );
        setManagers(manager.data);
        };
      fetch();
    },[]);

    
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Acerca de</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Acerca de</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Nuestra historia</h2>
                    <p>Nuestra historia es tan extraña y divertidaY no creo que nadie se atrevería A contarla, emularla o discutirla
                        Pues carece de sentido y melodía Nuestra historia no es tan buena ni es tan mala
                        Y aunque lo parezca no es la equivocada Sólo es una rara historia que va, que regresa Que sueña y promete ser un poco diferente
                        Nuestra historia es tan compleja y dispareja Absoluta relegada e inocente
                        Que si tuvo algún pasado no hay presenteY el futuro se me hace inconsistente</p>
                    <p>Musica es una de las cosas más influyentes <em>
                        la utilizamos en todo</em>, y por eso es de vital importancia
                        la visualización de esta página web para aumentar nuestro interés.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Información de la página</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Inicio</dt>
                                <dd className="col-6">13 Junio. 2021</dd>
                                <dt className="col-6">Systems Engineer</dt>
                                <dd className="col-6">PUCE UNIVERSITY</dd>
                                <dt className="col-6">Inversión Total</dt>
                                <dd className="col-6">$5000</dd>
                                <dt className="col-6">Cantidad recaudada</dt>
                                <dd className="col-6">$40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card className="cuerpo">
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-3" >Hakuna Matata "Sin preocuparse es como hay que vivir".</p>
                                <footer className="blockquote-footer">Timon y Pumba,
                                <cite title="Source Title">Disney,
                                    Timon, Pumba, 1997</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">

                <div className="col-12">
                    <h2>Managers que financian la empresa</h2>
                </div>
                <div className="col-12 col-md md-2">
                    <Media list>
                        {managers.map((manager) =>
                            <div key="manager.id_manager" >
                                <RenderManager manager={manager} />
                            </div>
                        )}
                    </Media>                
                </div>
            </div>
        </div>
    );
}

function RenderManager({manager}){
    if(manager.id_manager===1){
    return(
    <Media tag="li">{console.log(manager)}
        <Media left middle>
            <Media object src={i1} alt={manager.nombre} height="20%" width="20%"/>
        </Media>
        <Media body >
        <Media heading>{manager.nombre}</Media>
            <p>Edad:{manager.edad}</p>
            <p>Tiene la cara redonda y los ojos pequeños, de un color verde esmeralda muy bonito. Suele vestir con colores muy llamativos y le encanta llevar ropa deportiva.

Una de las cosas que más me gustan de mi amiga Lorena es que es una chica muy agradable y extrovertida. Sin embargo, a veces es un poco despistada y tiende a olvidarse de las cosas con facilidad. En su tiempo libre le gusta ir de compras y pasear a su perro Timmy.</p>
        </Media>
    </Media>
    );}
    if(manager.id_manager===2){
        return(
        <Media tag="li">{console.log(manager)}
            <Media left middle>
                <Media object src={i2} alt={manager.nombre} height="20%" width="20%"/>
            </Media>
            <Media body >
            <Media heading>{manager.nombre}</Media>
                <p>Edad:{manager.edad}</p>
                <p>Juan tiene 30 años y vive en Barcelona. Es un chico alto y robusto, con la cara ancha y unos ojos negros muy grandes. Tiene la nariz aguileña y una boca redonda y fina. Suele vestir muy elegante porque trabaja como asesor para una empresa muy importante, aunque aprovecha los fines de semana para llevar ropa más cómoda.

Es un chico muy alegre y educado, comprometido con su trabajo y siempre dispuesto a ayudar a quienes se lo piden.</p>
            </Media>
        </Media>
        );}
        if(manager.id_manager===3){
            return(
            <Media tag="li">{console.log(manager)}
                <Media left middle>
                    <Media object src={i5} alt={manager.nombre} height="20%" width="20%"/>
                </Media>
                <Media body >
                <Media heading>{manager.nombre}</Media>
                    <p>Edad:{manager.edad}</p>
                    <p>Aspecto general: ágil, alto, atlético, bajo, barrigudo, canijo, corpulento, débil, delgado, deportivo, esbelto, esmirriado, firme, flaco, fuerte, gordo, joven, ligero, macizo, maduro, robusto, sano, torpe, viejo.
Boca: fina, firme, fresca, grande, pequeña, redonda, torcida.
Cabellos: abandonados, ásperos, brillantes, calvo, castaños, claros, cortos, cuidados, desordenados, despeinados, ensortijado, espesos, finos, grasos, largos, lisos, lustrosos, negros, ondulados, opacos, peinados, pelirrojo, recogidos, rizados, rubios, sedosos, sucios.</p>
                </Media>
            </Media>
            );}
    else{
        return(
        <></>
        );}
}

export default Managers;