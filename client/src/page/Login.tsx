import "../css/Login.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"

export const Login = () => {
    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/home">
                        <img src="../../public/image/Logo.png" alt="Image" className="img-fluid" width='700px'/></Link>
                        <Link className="logo" to="/home"><h1 className="H1"> Planify</h1></Link>
                    </div>
                    <div className="col-md-6 contents">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="mb-4">
                                    <h3>Se connecter</h3>
                                    <p className="mb-4">Connectez vous pour gérer, annuler, ou prendre un Rendez-vous</p>
                                </div>
                                <form action="#" method="post">
                                    <div className="form-group first">
                                        <label htmlFor="username">Email</label>
                                        <input type="text" className="form-control" id="username"/>

                                    </div>
                                    <div className="form-group last mb-4">
                                        <label htmlFor="password">Mot de passe</label>
                                        <input type="password" className="form-control" id="password"/>

                                    </div>

                                    <div className="d-flex mb-5 align-items-center test1">
                                        <label className="control control--checkbox mb-0"><span className="caption">Se souvenir</span>
                                            <input type="checkbox" checked="checked"/>
                                            <div className="control__indicator"></div>
                                        </label>

                                        <span className="ml-auto"><a href="#"
                                                                     className="forgot-pass">Mot de passe oublié ?</a></span>
                                    </div>

                                    <input type="submit" value="Se connecter" className="btn btn-block btn-primary"/>

                                    <span
                                        className="d-block text-left my-4 text-muted">&mdash; ou connectez vous avec : &mdash;</span>

                                    <div className="social-login">
                                        <a href="#" className="facebook">
                                            <span className="icon-facebook mr-3"></span>
                                        </a>
                                        <a href="#" className="twitter">
                                            <span className="icon-twitter mr-3"></span>
                                        </a>
                                        <a href="#" className="google">
                                            <span className="icon-google mr-3"></span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}