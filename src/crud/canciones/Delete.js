import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

const DeletePost = (props) => {
    const { id } = useParams();
    const [post, setPost] = useState();

    useEffect(()=>{let getId=async () => {
        await axios.get(`http://localhost:3001/cancion/${id}`)
        .then(result=>console.log(result.data));
        }
        
        getId();
    }, [id]);
    const remove=async (id)=>{
        await axios.delete(`http://localhost:3001/cancion/${id}`);
    }

    return (
        <div>
            <h2>Deseja excluir o post <strong>{post?.title}</strong>?</h2>
            <br />
            <div className="btn-group">
                <Link to="/canciones" className="btn btn-primary">
                    <i className="fa fa-arrow-left"></i> Cancelar
                </Link>
                <Link to="/canciones" onClick={()=>remove(id)} className="btn btn-success">
                    <i className="fa fa-arrow-left"></i> Aceptar
                </Link>
            </div>
        </div>
    );
}

export default DeletePost;