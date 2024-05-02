import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import { verifyAccount } from "../services/api"
import { setAuth, setId, setToken} from "../features/store"
import Forms from "../components/Forms"
import * as thunk from "../middlewares/thunks"
import {dataConnect} from "../datas/datas"
import { selectToken, selectUserId } from "../features/selector"

const Connexion = ()=>{
    console.log('Connexion:')
    const dispatch = useDispatch()
    const id = useSelector(selectUserId)
    console.log('idCONNECT:', id)
    const token = useSelector(selectToken)
    const navigate = useNavigate()
    const [message,setMessage]=useState(false)

    useEffect(() => {
        if(id !== null){
            console.log('idFETCH:', id)
            const data = {id:id, token:token, idDef:0, ctrl:'getUserConnect', other:null}
            dispatch(thunk.getInfosUser(data)).then((res)=>{
                dispatch(setAuth(true))
                navigate('/homeUser')
            })
        }
      }, [dispatch, id, token, navigate])

    const account = async (data) =>{
        console.log('CONNEXION')
        if(data){
               const result = await verifyAccount(data, 'verifyAccount')
            if(!result.message){
                dispatch(setToken(result.token))
                dispatch(setId(result.userId))
            }else{
                setMessage(true)
            }
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