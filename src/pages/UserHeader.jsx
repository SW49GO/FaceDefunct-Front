import React, { useEffect, useRef } from 'react'
import { FaCamera, FaUsers, FaComment} from "react-icons/fa";
import { selectDefunctsList, selectNumberFriends, selectNumberMessages, selectUserInfos,selectToken, selectUserId, selectAuth} from "../features/selector"
import { useSelector, useDispatch } from "react-redux"
 import { Link } from "react-router-dom"
 import { useState} from "react"
import { setFiles, updatePhoto, getInfos, updater} from "../services/api"
import { updateUserInfos, setAuth, setDefunctsList, setDefIdSelected, setNumberFriends, setSelectedDef, setListFriends, setToken, setId} from '../features/store'
import { useQuery, useQueryClient } from 'react-query'
import {useNavigate} from 'react-router-dom'
import *as thunk from "../middlewares/thunks"

const UserHeader = () =>{
    console.log('UserHeader:')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = useSelector(selectAuth)
    console.log('authUSERHEADER:', auth)
    const id = useSelector(selectUserId)
    const token = useSelector(selectToken)
    const numberFriends = useSelector(selectNumberFriends)
    const numberMessages = useSelector(selectNumberMessages)
    const defunctsList = useSelector(selectDefunctsList)
    console.log('defunctsList:', defunctsList)
    const infosUser = useSelector(selectUserInfos)
    console.log('infosUser:', infosUser)
    const fileInputRef = useRef(null)
    // /**
    //  * STATES
    //  */
    const [activeMenuIndex, setActiveMenuIndex] = useState(null)
    const [cacheBuster, setCacheBuster] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    console.log('isOpen:', isOpen)
    const toggleOpen =()=>{setIsOpen(!isOpen)}
    // Class when submenu "fiche" is open
    const activeDefunct = isOpen ?'activeDefunct':''
    // Define profil photo
    const image = infosUser[0].photo === "" ? './assets/site/noone.jpg': infosUser[0].photo 

    useEffect(()=>{
        if(id !== null && auth===true){
        const data={id:id, token:token}
        dispatch(thunk.initializeHeader(data))
        }
    }, [id,token,dispatch, auth])

    
    /**
     * Function to save picture profil user
     * @param {event} e 
     */
    const handleFileChange=(e)=>{
        const datas = {id:id, idDef:0, dest:'profil', token:token, file:e.target.files}
        dispatch(thunk.saveFile(datas))
        setCacheBuster(prev => prev + 1)
    }
    const handleImageClick=()=>{ fileInputRef.current.click()}

        /**
     * Function to retrieve the id of the Defunct selected
     * @param {number} idDef 
     */
        const selectedDefunct= (idDef)=>{
            dispatch(setDefIdSelected(idDef))
            const selectedDef = defunctsList.filter((item)=>(item.id===idDef))
            dispatch(setSelectedDef(selectedDef[0]))
            navigate('/modifyDef')
        }

    // Activate icon if new friends
    const icon_anim_f = numberFriends!==0 ? 'icon_anim':''
    // Activate icon if new friends
    const icon_anim_m = numberMessages!==0 ? 'icon_anim':''

    if(auth){
        return(
            <> 
            <section className="userMenu">
                <h3>{infosUser[0].pseudo ? infosUser[0].pseudo: `${infosUser[0].lastname}' '${infosUser[0].firstname}`}</h3>
                <div className="userMenu__profil">
                    <div className="userMenu__profil-photo">
                    <form className="userMenu__profil-form" encType="multipart/form-data">
                        <div className="userMenu__profil-form-photo">
                            {image!=='' ?<img src={`http://localhost:3000/${image}?cache=${cacheBuster}`} alt="user"/>:<img className="img" src={`${image}?cache=${cacheBuster}`} alt="user"/>}
                            <input type="file" name="file" id="photo_user" ref={fileInputRef} onChange={handleFileChange}/>
                            <FaCamera onClick={handleImageClick}/>
                        </div>
                    </form>
                    </div>
                    <div className="userMenu__profil-service">
                        <Link to={'/tchat'}>
                            <FaUsers className={`${icon_anim_f}`}/>
                        </Link>
                        <Link>
                            <FaComment className={`${icon_anim_m}`}/>
                        </Link>
                    </div>
                </div>
                <div className="userMenu__link">
                    <div>
                    <Link to={'/homeUser'} className={activeMenuIndex === 0 ? 'activeMenu' : ''} onClick={() => setActiveMenuIndex(0)}>Accueil</Link>
                    </div>
                    <div>
                    <Link  className={activeMenuIndex === 1 ? 'activeMenu' : ''} onClick={() => setActiveMenuIndex(1)}>Rechercher</Link>
                    </div>
                    <div className='userMenu__defunct'>
                    <Link  className={activeMenuIndex === 2 ? `activeMenu ${activeDefunct}` : ''} onClick={() => {setActiveMenuIndex(2); toggleOpen()}}>Fiches</Link>
                    {isOpen && 
                        <div className='userMenu__defunct-subMenu'>
                            <Link to={'/createForm'} onClick={()=>setIsOpen(false)}>Créer</Link>
                            <p>Modifier :</p>
                            {defunctsList.length>0 &&
                                <div className='userMenu__defunct-list'>
                                { Object.entries(defunctsList).map(([key, item])=>(
                                <p key={key} onClick={()=>{selectedDefunct(item.id)}}>{item.lastname} {item.firstname}</p>
                                ))}
                                </div>}
                        </div>
                    }
                    </div>
                    <div>
                    <Link  className={activeMenuIndex === 4 ? 'activeMenu' : ''} onClick={() => setActiveMenuIndex(4)}>Profil</Link>
                    </div>
                </div>  
           </section>
           </>
        )
    }
}
export default UserHeader