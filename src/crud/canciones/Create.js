import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const Create = (props) => {

    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = data => {
        const request={
            id:uuidv4(),
            nombre:data.nombre,
            duracion:data.duracion,
            colaboradores:data.colaboradores,
            dj:data.dj
        };
        axios.post('http://localhost:3001/cancion/', request).then(result => {
        alert("Exito");
        })
    };

    
    return (
        <div className="container">
            <div className="card-body">
                <h5 className="card-title">Nueva Cancion</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group row-cell">
                            <label className="col-2">Nombre</label>
                            <input type="text" name="nombre" className="form-control" 
                            {...register('nombre',{ required: true, maxLength:20
                                                     })} />
                            <small className="form-text text-danger">{errors.nombre && 'Nombre requerido\n'}</small>
                            <small className="form-text text-danger">{errors.nombre && 'No exceder las 20 letras!'}</small>
                        </div>
                        <div className="form-group">
                            <label>Duracion</label>
                            <input type="number" className="form-control" {...register('duracion',{ required: true })} /> 
                            <small className="form-text text-danger">{errors.duracion && 'Ingresar duración\n'}</small>
                        </div>
                        <div className="form-group">
                            <label>Colaboradores</label>
                            <input type="text" className="form-control" {...register('colaboradores',{ required: true })} /> 
                            <small className="form-text text-danger">{errors.colaboradores && 'Ingresar colaboradores\n'}</small>
                        
                        </div>
                        <div className="form-group">
                            <label>DJ</label>
                            <input type="text" className="form-control" {...register('dj',{ required: true })} /> 
                            <small className="form-text text-danger">{errors.dj && 'Ingresar dj\n'}</small>
                        
                        </div>
                        <button type="submit" className="btn btn-success">Guardar</button>
                        <Link to="/canciones" className="btn btn-primary">
                            <i className="fa fa-arrow-left"></i>Volver 
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Create;