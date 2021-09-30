import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import '../../css/login.css';
import { types } from '../../types/types';



export const LoginScreen = ({ history }) => {


    const { dispatch } = useContext(AuthContext);


    const handleLogin = () => {
        // e.preventDefault();
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Jose Luis'
            }
        })
        // history.push('/');
        history.replace(lastPath);

    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                <a
                    href="/login"
                    className="navbar-brand"
                >
                    SuperBancas
                </a>
            </nav>
            <div className="container-login">
                <div className="row">
                    <div className="box mx-auto">
                        <div className="card-login text-center">
                            <div className="card-header bg-dark">
                                <h1>Ingresar</h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleLogin}>
                                    <div className="form-row">
                                        <div className="offset-1 col-lg-10">
                                            <input
                                                type="text"
                                                placeholder="Usuario"
                                                className="inp mt-3"

                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="offset-1 col-lg-10">
                                            <input
                                                type="text"
                                                placeholder="password"
                                                className="inp mt-3"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row py-3">
                                        <div className="offset-1 col-lg-10">
                                            <button
                                                className="button btn-primary mt-2"
                                                type="submit"
                                            >
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer bg-dark">
                                SuperBancas Admin
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark px-5 ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/login">SuperBancas</a>
                </div>
            </nav>
        </div>
    )
}
