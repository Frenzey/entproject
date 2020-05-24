import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import { Link } from 'react-router-dom'
import './assets/bootstrap/css/bootstrap.min.css'
import bckimg from './assets/img/backgrounds/visualize-data.png'

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-9 col-lg-12 col-xl-10">
                <div class="card shadow-lg o-hidden border-0 my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-flex">
                                <img src={bckimg}/>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h4 className="text-dark mb-4">Connectez vous</h4>
                                    </div>
                                <form className="user" onSubmit={handleLogin}>
                                        <div className="form-group"><input className="form-control form-control-user" type="email" id="exampleInputEmail" placeholder="Entrer un email valide" name="email"/></div>
                                        <div className="form-group"><input className="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password"/></div>
                                        <div className="form-group">
                                        </div><button className="btn btn-primary btn-block text-white btn-user" type="submit">Se connecter</button>
                                        <hr></hr>
                                </form>
                                    <div className="text-center"><p>Vous n'avez pas de compte? <br/>
                                    <Link to="/signup" className="small">
                                        Enregistrez vous
                                    </Link></p></div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    )
};

export default withRouter(Login);
