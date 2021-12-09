import React, {useEffect} from 'react';
import {  useQuery } from "@apollo/client";
import {GET_INSCRIPCIONES} from "../graphql/inscripciones/queries";
import { toast } from 'react-toastify';

function GestionInscripciones () {

    const { data, error, loading } = useQuery(GET_INSCRIPCIONES);

    useEffect(() => {
        if (error) {
          toast.error('Error consultando las inscripciones');
        }
      }, [error]);
    
      if (loading) return <div className ='cargando'>Cargando....</div>;


    return (

        <div className="body-text">
            <h1>Inscripciones</h1>
            <table>
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>Proyecto</th>
                        <th>Lider del proyecto</th>
                        <th>Estudiante Inscrito</th>
                        <th>Estado</th>
                        <th>Fecha de ingreso</th>
                        <th>Fecha de egreso</th>
                        <th>Editar</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {data && 
                        data.Inscripciones.map((i) => {
                            return (
                                <tr key = { i._id }>
                                    <td>{ i._id}</td>
                                    <td>{i.proyecto.nombre}</td>
                                    <td>{ (i.proyecto.lider.nombre)+' '+(i.proyecto.lider.apellido)}</td>
                                    <td>{ (i.estudianteInscrito.nombre)+' '+(i.estudianteInscrito.apellido)}</td>
                                    <td>{ i.estadoInscripcion }</td>
                                    <td>{ i.fecha_ingreso }</td>
                                    <td>{ i.fecha_egreso }</td>
                                    <td><button disabled={i.estadoInscripcion !== 'PENDIENTE'} 
                                    
                                      >Aprobar</button>
                                      <button disabled={i.estadoInscripcion !== 'PENDIENTE'} 
                                    
                                    >Rechazar</button>
                                         
                                    
                                   </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    );

};

/*
//en el modulo proyectos, donde vaya a quedar el boton pongo lo siguiente:
//<CrearInscripcion  idProyecto={proyecto.id}/>

const CrearInscripcion = ({idProyecto, estado}) => {
    const [crearInscripcion, {data, loading, error}] = useMutation(CREAR_INSCRIPCION);
// esto cuando tenga el login, para que traiga la informacion del usuario desde el entorno, le quito arriba idUsuario
const {userData} = useUser();
    useEffect(()=>{
       if (data) {
           console.log(data);
           toast.success('Inscripción creada con exito');
       }
    }, [data]);

    const Inscribirse = () =>{
        crearInscripcion({variables: {proyecto: idProyecto, estudiante: userData.id}})
    }

    return(
        <Button
        onClick={()=> Inscribirse()}
        disabled={estado === 'INACTIVO'}
        loading={loading}
        text='Inscribirme'
        />
    )
};*/


export { GestionInscripciones};