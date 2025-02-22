import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../component/Page.tsx';
import { Link } from 'react-router-dom';
import {AnimatePresence, motion} from "framer-motion";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [erreurMail, setErreurMail] = useState(false);
    const navigate = useNavigate();
    const [erreurServer, setErreurServer] = useState(false);
    const errorTextEmail = document.getElementById("email-error");
    const errorTextNom = document.getElementById("nom-error");
    const errorTextPrenom = document.getElementById("prenom-error");
    const errorTextPassword = document.getElementById("password-error");
    const errorTextPasswordNoMatch = document.getElementById("password-nomatch-error");

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const erreurEmail = () => {
        if (!validateEmail(email)) {
        errorTextEmail.classList.remove("hidden");
        } else {
        errorTextEmail.classList.add("hidden");
        }
    }

    const Submit = async (event: React.FormEvent) => {
        event.preventDefault();

        console.log("test")
        if (email == null || email === '') {
            errorTextEmail.classList.remove("hidden");
            return
        } else if (prenom === ''){
            errorTextPrenom.classList.remove("hidden");
            return
        } else if (nom === ''){
            errorTextNom.classList.remove("hidden");
            return
        } else if (password === '' || confirmPassword === ''){
            errorTextPassword.classList.remove("hidden");
            return
        }

        if (password !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ login: email, password }),
            });

            if (response.status === 201) {
                navigate('/login');
            } else if (response.status === 409) {
                setErreurMail(true);
            } else {
                alert('Erreur lors de l\'inscription 2');
            }
        } catch (error) {
            console.error('Erreur:', error);
            setErreurServer(true);
        }
    };

    return (
        <>
            <Page>
                <div className="container flex flex-col mx-auto bg-white rounded-lg p-9 my-5 min-w-6xl">
                    <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                        <div className="flex items-center justify-center w-full lg:p-12">
                            <div className="flex items-center xl:p-10 w-130">
                                <form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"
                                      onSubmit={Submit}>
                                    <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">S'inscrire</h3>
                                    <div className="mb-5">
                                        <label htmlFor="email"
                                               className="text-sm text-start text-grey-900">Email *</label>
                                        <input id="email" type="email" placeholder="mail@plannify.com"
                                               className="  mt-2 flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                               value={email} onChange={(e) => setEmail(e.target.value)}
                                               onBlur={erreurEmail}/>
                                        <p className=" text-[10px] text-red-500 hidden text-left italic" id="email-error">Veuillez entrer une
                                            adresse valide.</p>
                                    </div>
                                    <div className="flex flex-row gap-5 mb-5">
                                        <div className="flex-col flex">
                                            <label htmlFor="prenom"
                                                   className="mb-2 text-sm text-start text-grey-900">Prenom *</label>
                                            <input id="prenom" type="text" placeholder="Entrez votre prénom."
                                                   className="flex items-left w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl" value={prenom}
                                                   onChange={(e) => setPrenom(e.target.value)}/>
                                            <p className=" text-[10px] text-red-500 hidden text-left italic" id="prenom-error">Veuillez entrer un Prenom.</p>
                                        </div>
                                        <div className="flex-col flex">
                                            <label htmlFor="nom"
                                                   className="mb-2 text-sm text-start text-grey-900">Nom *</label>
                                            <input id="nom" type="text" placeholder="Entrez votre nom."
                                                   className="flex items-right w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl" value={nom}
                                                   onChange={(e) => setNom(e.target.value)}/>
                                            <p className=" text-[10px] text-red-500 hidden text-left italic" id="nom-error">Veuillez entrer un Nom.</p>
                                        </div>
                                    </div>
                                    <label htmlFor="password" className="mb-2 text-sm text-start text-grey-900">Mot de
                                        passe *</label>
                                    <input id="password" type="password" placeholder="Entrez un mot de passe."
                                           className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                           value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    <input id="confirmPassword" type="password" placeholder="Confirmer le mot de passe."
                                           className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                           value={confirmPassword}
                                           onChange={(e) => setConfirmPassword(e.target.value)}/>
                                    <p className=" text-[10px] text-red-500 hidden text-left italic" id="password-error">Veuillez entrer un mot de passe valide.</p>
                                    <p className=" text-[10px] text-red-500 hidden text-left italic" id="password-nomath-error">Votre mot de passe ne correspond pas.</p>
                                    <button type="submit" className="btn bg-white text-black border-[#e5e5e5]">
                                        <svg aria-label="Email icon" width="16" height="16"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2"
                                               fill="none" stroke="black">
                                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                            </g>
                                        </svg>
                                        S'inscrire
                                    </button>
                                    <div className="flex items-center m-5">
                                        <hr className="h-0 border-b border-solid border-grey-500 grow"/>
                                        <p className="mx-4 text-grey-600">Ou</p>
                                        <hr className="h-0 border-b border-solid border-grey-500 grow"/>
                                    </div>
                                    <div className="flex gap-3 flex-col ">
                                        <button className="btn bg-white text-black border-[#e5e5e5]">
                                            <svg aria-label="Google logo" width="16" height="16"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <g>
                                                    <path d="m0 0H512V512H0" fill="#fff"></path>
                                                    <path fill="#34a853"
                                                          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                                    <path fill="#4285f4"
                                                          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                                    <path fill="#fbbc02"
                                                          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                                    <path fill="#ea4335"
                                                          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                                                </g>
                                            </svg>
                                            S'inscrire avec Google
                                        </button>
                                        <button className="btn bg-black text-white border-black">
                                            <svg aria-label="Apple logo" width="16" height="16"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1195 1195">
                                                <path fill="white"
                                                      d="M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z"></path>
                                            </svg>
                                            S'inscrire avec Apple
                                        </button>
                                        <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
                                            <svg aria-label="Facebook logo" width="16" height="16"
                                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                <path fill="white"
                                                      d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path>
                                            </svg>
                                            S'inscrire avec Facebook
                                        </button>
                                        <div className="m-3">
                                            <Link to={"/login"} className="font-bold text-grey-700"> Vous avez déjà un
                                                compte ?<br></br> Connectez-vous </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Page>

            {erreurMail && (
                <AnimatePresence>
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white p-6 rounded-lg w-2xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-xl font-bold m-6 text-center">Avez-vous déjà un compte ?</h2>
                            <p className="text-left text-sm">
                                L'email saisi (<strong>{email}</strong>) est déjà associé à un compte Plannify.
                                S'il s'agit du vôtre, connectez-vous.
                            </p>
                            <div className="flex justify-end m-4">
                                <button
                                    onClick={() => setErreurMail(false)}
                                    className="mr-2 btn bg-gray-300 text-black"
                                >
                                    Modifier l'email saisi
                                </button>
                                <button
                                    onClick={() => navigate('/login')}
                                    className="btn bg-blue-500 text-white"
                                >
                                    Se connecter
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            )}
            {erreurServer && (
                <AnimatePresence>
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white p-6 rounded-lg w-2xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-xl font-bold m-6 text-center">Problème de connexion</h2>
                            <p className="text-left text-sm">
                                Nous sommes sincèrement désolés, mais un problème est survenu lors de votre inscription. Nous vous invitons à réessayer ultérieurement.
                            </p>
                            <div className="flex justify-end m-4">
                                <button
                                    onClick={() => setErreurServer(false)}
                                    className="mr-2 btn bg-gray-300 text-black"
                                >
                                    Réessayer
                                </button>
                                <button
                                    onClick={() => navigate('/login')}
                                    className="btn bg-blue-500 text-white"
                                >
                                    Se connecter
                                </button>
                                <button
                                    onClick={() => navigate('/login')}
                                    className="btn bg-blue-500 text-white"
                                >
                                    Acceuil
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            )}
        </>
    );
}

export default Register;