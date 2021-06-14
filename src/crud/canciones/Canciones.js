import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchBar from "./SearchBarComponent";


const PostList = (props) => {
    const [input, setInput] = useState('');
    const [postListDefault, setPostListDefault] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(()=>{ let fetch=async () => {
       
        const posts = await axios.get(
            'http://localhost:3001/cancion/',
          );
          setPosts(posts.data);
          setPostListDefault(posts.data);
        };
      fetch();
    },[]);
    const updateInput = async (input) => {
        const filtered = postListDefault.filter(cancion => {
         return cancion.nombre.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setPosts(filtered);
     }
    return (
        <><div className="container">
        <h1>Lista de Canciones</h1>
        <SearchBar 
         input={input} 
         onChange={updateInput}
        /></div>
        <RenderTabla posts={posts}/>
      </>
    );
}

const RenderTabla=({posts=[]})=>{
    return(
        <div className="scroll">
        <table className="table">
            <thead>
                <tr>
                    <th className="text-center">    
                        <div className="btn-group ">
                                    <Link to={`/create`} className="btn btn-secondary">
                                        <i className="fa fa-plus"></i>
                                    </Link>
                                </div></th>
                    <th className="text-center">Nombre</th>
                    <th className="text-center">Duracion</th>
                    <th className="text-center">Colaboradores</th>
                    <th className="text-center">DJ</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map(post => (
                            <tr key={post.id}>
                            <td className="text-center">-</td>
                            <td className="text-center">{post.nombre}</td>
                            <td className="text-center">{post.duracion}</td>
                            <td className="text-center">{post.colaboradores}</td>
                            <td className="text-center">{post.dj}</td>
                            <td className="text-center">
                                <div className="btn-group">
                                    <Link to={`/edit/${post.id}`} className="btn btn-primary">
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                    <Link to={`/cancion/${post.id}`} className="btn btn-danger">
                                        <i className="fa fa-trash"></i>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </table></div>
    )
}

export default PostList;