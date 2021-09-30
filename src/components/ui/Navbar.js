import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

// export const Navbar = ({ history }) => {

export const Navbar = () => {

    const { user: { name }, dispatch } = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {

        console.log('click!');
        history.replace('/login');

        dispatch({
            type: types.logout,
        });

    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark px-5">
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Project
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto">
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/scrutiny"
                        >
                            Escrutinio
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/list"
                        >
                            Lista Escrutinio
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/dc"
                        >
                            DC
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav ms-auto">
                        <span className="nav-item nav-link text-info">
                            Bienvenido, {name}
                        </span>
                        <button
                           className="nav-item nav-link btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
