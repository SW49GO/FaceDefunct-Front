import { selectAuth, selectDefunctsList, selectUserInfos } from "../features/selector"
import { useSelector, useDispatch} from "react-redux"
// import UserHeader from "./UserHeader"
// import Error from "./Error"
// import React, { useEffect, useState } from "react"
// import { setDefIdSelected, setSelectedDef} from "../features/store"
import { useNavigate } from "react-router-dom"


const HomeUser=()=>{
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const userInfos = useSelector(selectUserInfos)
    const defunctsList = useSelector(selectDefunctsList)
   
    return (
        <></>
        )
}
export default HomeUser