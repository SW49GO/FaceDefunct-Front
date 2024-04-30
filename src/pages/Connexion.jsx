import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch} from "react-redux"
import { verifyAccount } from "../services/api"
import { setId, setToken} from "../features/store"
import Forms from "../components/Forms"
import { fetchInfos } from "../middlewares/thunks"
import {dataConnect} from "../datas/datas"

const Connexion = ()=>{
    const dispatch = useDispatch()
    const [id, setNewId] = useState(null)
    const [token, setNewToken] = useState(null)
    const navigate = useNavigate()
    const [message,setMessage]=useState(false)

    useEffect(() => {
        if(id!==null){
        const data = {id:id, token:token,idDef:0,ctrl:'getUserData',other:null}
        dispatch(fetchInfos(data)).then(() => {
            navigate('/homeUser')
            })
        }
      }, [dispatch, id, token, navigate])

    const account = async(data) =>{
        const result = await verifyAccount(data, 'verifyAccount')
        if(!result.message){
            dispatch(setToken(result.token))
            setNewToken(result.token)
            dispatch(setId(result.userId))
            setNewId(result.userId)
        }else{
            setMessage(true)
        }
      }

    return(
        <>
            <div className="connexion">
                {message ? <p className="message">Identifiants Incorrect</p>:''}
                <h1 className="connexion__title">Connexion</h1>
                <div className="connexion__form">
                    <Forms returnForm={account} classButton={'button button-a'} nameButton={'Valider'} data={dataConnect} containerClass={'connexion__form-signIn'}/>
                    <div className="connexion__buttons">
                        <Link className="button button-a" to="/lost">Mot de passe oublié</Link>
                        <Link className="button button-a" to="/register">S'inscrire</Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Connexion