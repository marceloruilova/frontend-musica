import React, { useEffect, useState } from 'react';
import { Loading } from './LoadingComponent';
import axios from 'axios';

const PostList = () => {
    const [isLoaded, setIsLoaded] = useState(true);
    const [posts, setPosts] = useState([]);
    //const [canciones, setCanciones] = useState([]);
    

    useEffect(()=>{ 
        
        let spinner= ()=>setTimeout(() => setIsLoaded(false), 1000);
        let fetch=async () => {
        const posts = await axios.get(
            'https://localhost:44350/api/Descargas',
          );
          /*const canciones = await axios.get(
            'https://localhost:44350/api/Canciones',
          );
          const guardar1=canciones.data;
          setCanciones(guardar1);*/
          setPosts(posts.data);
          //setNuevo([{"Canciones":{guardar1},"Descargas":{guardar2}}]);
        };
      fetch();
      spinner();
    },[]);

    return (
        isLoaded ? <Loading/> : <table className="table">
            <thead>
                <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">Navegador</th>
                    <th className="text-center">Formato</th>
                    <th className="text-center">Duracion</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map(post => (
                        <tr key={post.id_descarga}>
                            <td className="text-center">{post.id_descarga}</td>
                            <td className="text-center">{post.navegador}</td>
                            <td className="text-center">{post.formato}</td>
                            <td className="text-center">{post.duracion}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default PostList;