import * as api from "../services/api"
import {Link} from 'react-router-dom'
import { useState } from "react"
import { dataRegister } from "../datas/datas"
import Forms from "../components/Forms"

const Register= () =>{
    const [isOpen, setIsOpen] = useState(false)
 
    const handleRegister=async(data)=>{
        await api.signIn(data)
        setIsOpen(true)
    }
    return (
    <>
        <div className="register" style={isOpen ? { filter: 'blur(0.513rem)' } : {}}>
            <h1 className="register__title">Inscription</h1>
            <div className="register__htmlForm">
            <Forms returnForm={handleRegister} classButton={'button'} nameButton={'Valider'} data={dataRegister} containerClass={"form__register"}/>
            </div>
        </div> 
        {isOpen && 
            <div className="confirm">
                <div className="confirm__signIn">
                    <p>Inscription validée !</p>
                    <Link className="button button-a" to={'/connexion'}>Se Connecter</Link>
                </div>
            </div>}
    </>
    )
}
export default Register