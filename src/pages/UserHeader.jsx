import React, { useEffect, useRef } from 'react'
import { FaCamera, FaUsers, FaComment} from "react-icons/fa";
import { selectDefunctsList, selectNumberFriends, selectNumberMessages, selectUserInfos,selectToken, selectUserId} from "../features/selector"
import { useSelector, useDispatch } from "react-redux"
 import { Link } from "react-router-dom"
 import { useState} from "react"
import { setFiles, updatePhoto, getInfos, updater} from "../services/api"
import { updateUserInfos, setAuth, setDefunctsList, setDefIdSelected, setNumberFriends, setSelectedDef, setListFriends, setToken, setId} from '../features/store'
import { useQuery, useQueryClient } from 'react-query'
import {useNavigate} from 'react-router-dom'
import * as thunk from "../middlewares/thunks"



const UserHeader = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const fileInputRef = useRef(null)
    const infosUser = useSelector(selectUserInfos)
    /**
     * STATES
     */
    const [activeMenuIndex, setActiveMenuIndex] = useState(null)
    const [cacheBuster, setCacheBuster] = useState(0)
    const [image, setImage] = useState(infosUser.photo ? infosUser.photo : 'assets/site/noone.jpg')

    const handleFileChange=()=>{}
    const handleImageClick=()=>{ fileInputRef.current.click()}
        return(
            <> 
            <section className="userMenu">
                <h3>{infosUser.pseudo ? infosUser.pseudo: `${infosUser.lastname}' '${infosUser.firstname}`}</h3>
                <div className="userMenu__profil">
                    <div className="userMenu__profil-photo">
                    <form className="userMenu__profil-form" encType="multipart/form-data">
                        <div className="userMenu__profil-form-photo">
                            {image!=='' ?<img src={`http://localhost:3001/${image}?cache=${cacheBuster}`} alt="user"/>:<img className="img" src={`${image}?cache=${cacheBuster}`} alt="user"/>}
                            <input type="file" name="file" id="photo_user" ref={fileInputRef} onChange={handleFileChange}/>
                            <FaCamera onClick={handleImageClick}/>
                        </div>
                    </form>
                    </div>
                    <div className="userMenu__profil-service">
                        <Link><FaUsers/><FaComment/></Link>
                    </div>
                </div>
                <div className="userMenu__link">
                    <Link  className={activeMenuIndex === 0 ? 'activeMenu' : ''} onClick={() => setActiveMenuIndex(0)}>Accueil</Link>
                    <Link  className={activeMenuIndex === 1 ? 'activeMenu' : ''} onClick={() => setActiveMenuIndex(1)}>Rechercher</Link>
                    <Link  className={activeMenuIndex === 2 ? 'activeMenu' : ''} onClick={() => setActiveMenuIndex(2)}>Créer</Link>
                    <Link  className={activeMenuIndex === 3 ? 'activeMenu' : ''} onClick={() => setActiveMenuIndex(3)}>Fiches</Link>
                    <Link  className={activeMenuIndex === 4 ? 'activeMenu' : ''} onClick={() => setActiveMenuIndex(4)}>Profil</Link>
                </div> 
           </section>
           </>)
}
export default UserHeader