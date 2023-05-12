import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const PanelControl = () => {
    return (
        <div>
            <h1>Panel de control</h1>
            <p>Elige una de estas opciones</p>
            <ul>
                <li>
                    <NavLink to="/panel/inicio">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/crear-articulos">Crear articulos</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/gestion-usuarios">Gestion de usuarios</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/acerca-de">Acerca de</NavLink>
                </li>
            </ul>
            <div>
                {/*Quiero cargar aqui los componentes de las subrutas o  */}
                <Outlet />
            </div>
        </div>
    );
}
