import Sidebar from "../components/Sidebar";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars  } from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars);

const AdminUsuariosPage = () => {
    return (
        <div>
            <div className="wrapper">
<<<<<<< HEAD
                <div className="sidebar">
                    
                    <div className="EncabezadoModulo">
                        <FontAwesomeIcon icon={faUsersCog} size="5x" color='#00ADB5'/> 
                        <span className="icon"><i className="fas fa-users-cog fa-5x"></i></span>
                        <h3>GESTION DE USUARIOS Y ROLES</h3>
                    </div>
                    <Sidebar />               
                </div>
               
=======
                    <Sidebar icono = {faUsersCog} titulo = 'GESTION DE USUARIOS Y ROLES'/>

>>>>>>> main
                <div className="principal">
                    <div className="Menu">
                        <div className="rp_titulo">GESTION DE USUARIOS Y ROLES</div>
                        <div className="rp_subtitulo">INGRESE EL ID DEL USUARIO Y LOS ROLES A MODIFICAR</div>

                        <div className="rp_formulario1">
                            <form action="">
                                <table className="tabla">
                                    <tr>
                                        <td>ID del Usuario:</td>
                                        <td><input className="input" type="text" name="id_usuario"/></td>
                                    </tr>
                                </table>
                                <table className="tabla">
                                    <tr>
                                        <td>Rol Autorizado</td>
                                        <td><input type="radio" name="Administrador"/>  Administrador</td>             
                                        <td><input type="radio" name="Vendedor"/>  Vendedor</td>
                                    </tr>
                                </table>
                                <table className="tabla">    
                                    <tr>
                                        <td>Estado Usuario</td>
                                        <td><input type="radio" name="pendiente"/>  Pendiente</td>     
                                        <td><input type="radio" name="autorizado"/>  Autorizado</td>
                                        <td><input type="radio" name="no_autorizado"/>  No Autorizado</td>
                                    </tr>
                                </table>
                                <table className="tabla">
                                    <tr>
                                        <td><a href="#"><input className="boton" type="reset" value="Borrar"/></a></td>
                                        <td><a href="#"><input className="boton" type="submit" value="Actualizar"/></a></td>
                                        <td><a href="#"><input className="boton" type="submit" value="Generar Listado"/></a></td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD

            {/*Activacion de la hamburguesa*/}
            <script src="js/hamburguesa.js"></script> */

=======
>>>>>>> main
        </div>
    );
};

export default AdminUsuariosPage;