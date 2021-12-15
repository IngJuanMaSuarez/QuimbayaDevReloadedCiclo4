import React from 'react';
import logoheader from '../media/logoheader.png';
import { useAuth } from '../context/authContext';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from "@fortawesome/free-solid-svg-icons";



function Header() {
  return (
    <div className="wrapper">
      <header className="principal">
        <div className="iconCompany">
          <img src={logoheader} alt="logo-header" height="70px" />
        </div>
        <div className='botonHeader'>
          <div class="dropdown">
            <button> &nbsp;Bienvenido &nbsp;| &nbsp;<FontAwesomeIcon icon={faCogs} size='1x' color='#092133' />&nbsp;</button>
            <div class="dropdown-content">
              <a><NavLink to={`/usuario/EditarPerfil`}>Editar Perfil</NavLink></a>
              <a><Logout /></a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

const Logout = () => {
  const { setToken } = useAuth();
  const deleteToken = () => {
    console.log('eliminar token');
    setToken(null);
  };
  return (
    <li onClick={() => deleteToken()}>
      <NavLink to='/auth/login'>
        <span >Cerrar Sesión</span>
      </NavLink>
    </li>
  );
};

export { Header };