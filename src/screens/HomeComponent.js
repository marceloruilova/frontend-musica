import React,{useState,useEffect} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle}from 'reactstrap';
import { Loading } from './LoadingComponent';
import {Link,Switch,Route,BrowserRouter} from "react-router-dom";
import logoartista from "../imgs/MarceloCezan.jpg";
import logocancion from "../imgs/juanes.jpg";
import axios from "axios";

function Home() {
    
    const [artistas,setArtistas]=useState([]);
    const [canciones,setCanciones]=useState([]);
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(()=>{
        let spinner= ()=>setTimeout(() => setIsLoaded(false), 1000);
        let fetch=async () => {
        const artista = await axios.get(
          'https://localhost:44350/api/Artistas',
        );
        const cancion = await axios.get(
            'https://localhost:44350/api/Canciones',
          );
          
            setArtistas(artista.data);
            setCanciones(cancion.data);
        };
      fetch();
      spinner();
    },[]);
    return(
        isLoaded ? <Loading/> : <div className="container">
        <div className="row justify-content-center">
            {artistas.map(item=>{
                if(item.id_artista<2){
                    return(
                        <div className="col-12 col-md m-1">
                            <Card className="yellow">
                                <CardImg src={logoartista} alt={item.nombre} />
                                <CardBody>
                                <CardTitle>Artista:{item.nombre}</CardTitle>
                                <CardText>Edad:{item.edad}</CardText>
                                <CardText>
                                Conocido por su habilidad para la música y por su historia de amor con Eurídice, cuyo rescate lo llevó a descender a los Infiernos. Dio muestras de su talento musical desde pequeño, por lo que Apolo regaló a Orfeo la lira, que las musas le enseñaron a tocar.</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        )}
                    }
                )
            }
            {canciones.map(item=>{
                if(item.id<2){
                    return(
                        <div className="col-12 col-md m-1">
                            <Card className="yellow">
                                <CardImg src={logocancion} alt={item.nombre} />
                                <CardBody>
                                <CardTitle>Artista:{item.nombre}</CardTitle>
                                <CardText>Duracion:{item.duracion}</CardText>
                                <CardText>Mis planes son amarte es el séptimo álbum de estudio del cantante colombiano Juanes, lanzado el 12 de mayo de 2017 a través del sello discográfico Universal Music Latino. Cuenta con las colaboraciones de los cantantes también colombianos Fonseca y Kali Uchis.</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        )}
                    }
                )
            }
        </div>
        <div className="row justify-content-center">
            <div className="col-12 col-md m-1">
                <Link to={'/canciones'} className="btn btn-primary">
                    <i className="fa fa-edit"> Mira las mejores canciones!</i>
                </Link>
            </div>
         

        </div>
    </div>
    );
}

export default Home;