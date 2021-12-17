import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { GET_USUARIOS } from '../../graphql/usuarios/querys'
import { Enum_Rol, Enum_EstadoUsuario } from '../../utils/enums';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import Input from '../../components/Input';
import ButtonLoading from '../../components/ButtonLoading';
import { Select } from '@material-ui/core';

const GestionUsuarios = () => {
    const { data, error, loading } = useQuery(GET_USUARIOS);

    useEffect(() => {
        console.log('data servidor', data);
      }, [data]);
    
      useEffect(() => {
        if (error) {
          toast.error('Error consultando los usuarios');
        }
      }, [error]);

      if(loading) return <div>Cargando...</div>

    return (
        <div className="body-text">
            <h1 className='rp_titulo'>MODULO DE GESTION DE USUARIOS</h1>
            <table>
                <thead>
                    <tr>
                        <th color='white'>
                            <Select name='filtro' size='4' autoFocus>
                                <option value='Identificacion'>Identificacion</option>
                                <option value='Nombre'>Nombre</option>
                                <option value='Apellido'>Apellido</option>
                                <option value='Correo' text-color='white'>Correo</option>
                            </Select>
                        </th>
                        <th><Input name='filtro' type='email' label='Filtro' placeholder='Correo'/></th>
                        <th><input type="submit" value="Filtrar"/></th>
                        <th><ButtonLoading 
                            // disabled={Object.keys(formData).length === 0}
                            // loading={mutationLoading}
                            text='Filtrar'
                        /></th>
                    </tr>
                </thead>
            </table>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Identificacion</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Correo</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.Usuarios.map((u) => {
                            return (
                                <tr key={u._id}>
                                    <td>{u._id}</td>
                                    <td>{u.identificacion}</td>
                                    <td>{u.nombre}</td>
                                    <td>{u.apellido}</td>
                                    <td>{u.correo}</td>
                                    <td>{Enum_Rol[u.rol]}</td>
                                    <td>{Enum_EstadoUsuario[u.estado]}</td>
                                    <td>
                                        <Link to={`/GestionUsuarios/Editar/${u._id}`}>
                                            <FontAwesomeIcon icon={ faPen } size="1x" color='#636363' className='cursor-pointer'/>
                                        </Link>
                                        <FontAwesomeIcon icon={ faTrashAlt } size="1x" color='#636363' className='cursor-pointer'/>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
};

export default GestionUsuarios ;
