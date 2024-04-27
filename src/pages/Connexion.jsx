import { Link, useNavigate } from "react-router-dom"
// import { useState, useEffect } from "react"
// import { useDispatch} from "react-redux"
import { useForm } from "react-hook-form"
// import { verifyAccount } from "../services/api"
// import { setId, setToken} from "../features/store"
// import { fetchInfos } from "../middlewares/thunks"

const Connexion = ()=>{

    const {handleSubmit,register} = useForm()
    const account=()=>{}

    return(
        <>
        return (
            <div className="connexion">
                {/* {message ? <p className="message">Identifiants Incorrect</p>:''} */}
                <h1 className="connexion__title">Connexion</h1>
                <div className="connexion__form">
                    <form onSubmit={handleSubmit(account)}>
                        <label htmlFor="email_user">Votre email</label>
                        <input type="email" id="email" name="email" required {...register('email')}/>
                        <label htmlFor="pwd_user">Votre mot de passe</label>
                        <input type="password" id="pwd_user" name="password" required {...register('password')}/>
                        <div className="connexion__buttons">
                            <button className="button" type="submit">Valider</button>
                            <Link className="button button-a" to="/lost">Mot de passe oublié</Link>
                            <Link className="button button-a" to="/register">S'inscrire</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
        </>
    )

}

export default Connexion