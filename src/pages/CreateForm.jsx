import { useForm } from "react-hook-form"
import { selectToken, selectUserId } from "../features/selector"
import {useSelector, useDispatch} from 'react-redux'
import { setRegister } from "../services/api"
import { setDefunctsList } from "../features/store"
import {useNavigate} from 'react-router-dom'
import { setFormatDate } from "../services/formatData"
import { dataCreateDefunct, selectAffinity } from "../datas/datas"
import Forms from "../components/Forms"
import { useState } from "react"

const Createform = ()=>{
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const id = useSelector(selectUserId)
    const token = useSelector(selectToken)

    const [idDef, setIdDef] = useState(null)


    const handleCreate= async (data)=>{
        const birthdate = setFormatDate(data.birthdate)
        const death_date = setFormatDate(data.death_date)
        data.birthdate = birthdate
        data.death_date = death_date
        console.log('data:', data)
        const result =  await setRegister(id, token, data, 'setDefunct')
        const idDef = result.result
        dispatch(setDefunctsList([{firstname:data.firstname,lastname: data.lastname,idDef: idDef}]))
        setIdDef(data.defunct_id)
    }
    const handleMoreInfo=(data)=>{
        console.log('data:', data)
        data.user_id  = id
        data.defunct_id = idDef
        if(data.defunct_id!==null){
            setRegister(id, token, data,'setUserAdmin')
            navigate('/homeUser')
        }
    }
    return(
        <>
         <section className="createform">
            <h1 className="createform__title">Créer une fiche</h1>
            <Forms returnForm={handleCreate} classButton={'button button-a'} nameButton={'Enregistrer'} data={dataCreateDefunct} containerClass={'createform__form'}/>
            <h3>Informations complémentaires</h3>
            <form className="createform__affinity" onSubmit={handleSubmit(handleMoreInfo)}>
                <label>Qui êtes-vous pour le defunt ?</label>
                <select name="affinity" {...register('affinity')}>
                    <option>Affinité</option>
                    {selectAffinity.map((item,index)=>(
                        <option key={index} value={item}>{item}</option>
                    )
                    )}
                </select>
                <p>Acceptez-vous de recevoir des cartes de condoléances pour ce defunt ?</p>
                    <label>Cartes par Email :</label> 
                    <div className="createform__affinity-card">
                        Oui<input type="radio" name="card_virtuel" value="1" {...register('card_virtuel', {setValueAs: (value) => value})}/>
                        Non<input type="radio" name="card_virtuel" value="0" {...register('card_virtuel', {setValueAs: (value) => value})}/>
                    </div>
                    <label>Cartes par adresse Postal :</label>
                    <div className="createform__affinity-card">
                        Oui<input type="radio" name="card_real" value="1" {...register('card_real', {setValueAs: (value) => value})}/>
                        Non<input type="radio" name="card_real" value="0" {...register('card_real', {setValueAs: (value) => value})}/>
                    </div>
                    <label>Acceptez-vous de recevoir des bouquets de fleurs pour ce defunt ?</label>
                    <div className="createform__affinity-card">
                        Oui<input type="radio" name="flower" value="1" {...register('flower', {setValueAs: (value) => value})}/>
                        Non<input type="radio" name="flower" value="0" {...register('flower', {setValueAs: (value) => value})}/>
                    </div>
                <input className="button button-a" type="submit" name="submit" value="Valider"/>
            </form>
        </section>
        </>
    )
}
export default Createform