import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../components/assets/bootstrap/css/bootstrap.min.css'
import bckimg from '../components/assets/img/backgrounds/visualize-data.png'

class Login extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    onChange(e) {

    }

    onSubmit(e) {

    }

    render() {

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
                                        <form className="user" onSubmit={this.onSubmit}>
                                                <div className="form-group"><input className="form-control form-control-user" type="text" id="exampleInputEmail" placeholder="Entrer un nom d'utilisateur" name="username" 
                                                value={this.state.username}
                                                onChange={this.onChange}/></div>
                                                <div className="form-group"><input className="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password"
                                                value={this.state.password}
                                                onChange={this.onChange}/></div>
                                                <div className="form-group">
                                                </div><button className="btn btn-primary btn-block text-white btn-user" type="submit">Se connecter</button>
                                                <hr></hr>
                                        </form>
                                            <div className="text-center"><p>Vous n'avez pas de compte? <br/>
                                            <Link to="/register" className="small">
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

    }
}

export default Login
