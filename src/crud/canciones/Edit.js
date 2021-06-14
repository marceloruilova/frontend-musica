import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const EditPost = (props) => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    useEffect(() => {
        axios.get(`http://localhost:3001/cancion/${id}`).then(result => {
            console.log(result.data);
        })
    }, [id]);

    const onSubmit = data => {
        axios.put(`http://localhost:3001/cancion/${id}`, data).then(result => {
        alert("Correcto");
    })
    };

    return (
        <div className="container">
            <div className="card-body">
                <h5 className="card-title">Actualizar Canción</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row-cell">
                            <label className="col-2">Nombre</label>
                            <input type="text" name="nombre" className="form-control-edit" 
                            {...register("nombre",{ required: false, maxLength:20
                                                     })} />
                        </div>
                        <div className="form-group row-cell">
                            <label className="col-2">Duracion</label>
                            <input type="number" className="form-control-edit" {...register('duracion',{ required: false })} /> 
                        </div>
                        <div className="form-group row-cell">
                            <label className="col-2">Colaboradores</label>
                            <input type="text" className="form-control-edit" {...register('colaboradores',{ required: false })} /> 
                        </div>
                        <div className="form-group row-cell">
                            <label className="col-2">DJ</label>
                            <input type="text" className="form-control-edit" {...register('dj',{ required: false })} /> 
                        </div>

                        <Link to="/canciones" className="btn btn-primary">
                            <i className="fa fa-arrow-left"></i> Cancelar
                        </Link>
                        &nbsp;
                        <button type="submit" className="btn btn-success">Guardar <i className="fa fa-save"></i></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditPost;